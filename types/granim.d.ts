declare module 'granim' {
  interface GranimState {
    gradients: [string, string][];
    transitionSpeed?: number;
    loop?: boolean;
  }

  interface GranimOptions {
    element: HTMLCanvasElement | string;
    direction?: 'left-right' | 'top-bottom' | 'diagonal' | 'radial' | 'custom';
    isPausedWhenNotInView?: boolean;
    opacity?: [number, number];
    states: Record<string, GranimState>;
  }

  class Granim {
    constructor(options: GranimOptions);
    destroy(): void;
    changeState(stateName: string): void;
    play(): void;
    pause(): void;
  }

  export default Granim;
}
