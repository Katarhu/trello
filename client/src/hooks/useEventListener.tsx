import { RefObject, useEffect, useRef } from "react";

export function useEventListener<E extends keyof WindowEventMap>(
  eventName: E,
  handler: (event: WindowEventMap[E]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<
  E extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  eventName: E,
  handler: (event: HTMLElementEventMap[E]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<E extends keyof DocumentEventMap>(
  eventName: E,
  handler: (event: DocumentEventMap[E]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<
  E,
  WE extends keyof WindowEventMap,
  HE extends keyof HTMLElementEventMap,
  T extends HTMLElement | MediaQueryList | void = void
>(
  eventName: WE | HE,
  handler: (
    event: WindowEventMap[WE] | HTMLElementEventMap[HE] | Event
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;
    const listener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, listener, options);

    // eslint-disable-next-line consistent-return
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}
