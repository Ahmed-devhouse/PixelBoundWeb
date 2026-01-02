// TypeScript declarations for Unity WebGL
declare global {
  interface Window {
    createUnityInstance: (
      canvas: HTMLCanvasElement,
      config: {
        dataUrl: string;
        frameworkUrl: string;
        codeUrl: string;
        streamingAssetsUrl: string;
        companyName: string;
        productName: string;
        productVersion: string;
      },
      onProgress?: (progress: number) => void
    ) => Promise<{
      Quit: () => void;
      SendMessage: (gameObject: string, method: string, value?: any) => void;
      SetFullscreen: (fullscreen: number) => void;
    }>;
  }
}

export {};
