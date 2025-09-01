import React, { JSX } from 'react';
import { DotButton, useDotButton } from './CarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselNavButton';
import useEmblaCarousel from 'embla-carousel-react';
import clsx from 'clsx';
import Image from 'next/image';

export default function Carousel(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide'>
            <img
              // className='object-contain'
              // width={300}
              // height={200}
              alt=''
              src='https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
          <div className='embla__slide'>
            <img
              // className='object-contain'
              // width={300}
              // height={200}
              alt=''
              src='https://images.unsplash.com/photo-1564659318382-6d44cf680407?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
          <div className='embla__slide'>
            <img
              // className='object-contain'
              // width={300}
              // height={200}
              alt=''
              src='https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
        </div>
      </div>

      {/* Not wrapped in a container because it will cover up the carousel. Which disables the panning movement */}
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              'embla__dot',
              index === selectedIndex && ' embla__dot--selected',
            )}
          />
        ))}
      </div>
    </section>
  );
}
