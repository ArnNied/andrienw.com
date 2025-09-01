import React, {
  ComponentPropsWithRef,
  JSX,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export function usePrevNextButtons(
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

export function PrevButton({
  ...props
}: ComponentPropsWithRef<'button'>): JSX.Element {
  return (
    <button
      type='button'
      className='embla__button embla__button--prev'
      {...props}
    >
      <ChevronLeft className='w-10 h-10' />
    </button>
  );
}

export function NextButton({
  ...props
}: ComponentPropsWithRef<'button'>): JSX.Element {
  return (
    <button
      type='button'
      className='embla__button embla__button--next'
      {...props}
    >
      <ChevronRight className='w-10 h-10' />
    </button>
  );
}
