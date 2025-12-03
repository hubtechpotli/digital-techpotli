"use client";

import { cn } from "@/lib/utils";

interface LoadingProps {
  /**
   * Size of the loading spinner
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "xl";
  /**
   * Optional custom className
   */
  className?: string;
  /**
   * Custom colors - array of 5 colors for the bars
   */
  colors?: [string, string, string, string, string];
  /**
   * Speed of animation in seconds
   * @default 0.9
   */
  speed?: number;
}

const sizeVariants = {
  sm: {
    container: "w-[60px] h-[60px] gap-[4px]",
    bar: "w-[3px] h-[30px]",
  },
  default: {
    container: "w-[100px] h-[100px] gap-[6px]",
    bar: "w-[4px] h-[50px]",
  },
  lg: {
    container: "w-[120px] h-[120px] gap-[7px]",
    bar: "w-[5px] h-[60px]",
  },
  xl: {
    container: "w-[150px] h-[150px] gap-[8px]",
    bar: "w-[6px] h-[75px]",
  },
};

export function Loading({ 
  size = "default", 
  className,
  colors = ["#4c86f9", "#49a84c", "#f6bb02", "#f6bb02", "#2196f3"],
  speed = 0.9
}: LoadingProps) {
  const variant = sizeVariants[size];
  
  // Calculate gap value for CSS variable
  const gapValue = size === "sm" ? "4px" : size === "lg" ? "7px" : size === "xl" ? "8px" : "6px";
  
  return (
    <div 
      className={cn("loading flex justify-center items-center", variant.container, className)}
      style={{
        "--speed-of-animation": `${speed}s`,
        "--gap": gapValue,
        "--first-color": colors[0],
        "--second-color": colors[1],
        "--third-color": colors[2],
        "--fourth-color": colors[3],
        "--fifth-color": colors[4],
      } as React.CSSProperties}
    >
      <span className={variant.bar} />
      <span className={variant.bar} />
      <span className={variant.bar} />
      <span className={variant.bar} />
      <span className={variant.bar} />
    </div>
  );
}

/**
 * Loading spinner wrapper component with centered layout
 */
interface LoadingWrapperProps {
  /**
   * Loading state
   */
  isLoading: boolean;
  /**
   * Content to show when not loading
   */
  children: React.ReactNode;
  /**
   * Loading component props
   */
  loadingProps?: Omit<LoadingProps, "className">;
  /**
   * Optional message to display below spinner
   */
  message?: string;
  /**
   * Custom className for wrapper
   */
  className?: string;
}

export function LoadingWrapper({ 
  isLoading, 
  children, 
  loadingProps,
  message,
  className 
}: LoadingWrapperProps) {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[200px] p-8", className)}>
      <Loading {...loadingProps} />
      {message && (
        <p className="mt-4 text-gray-600 text-sm md:text-base">{message}</p>
      )}
    </div>
  );
}

/**
 * Full page loading component
 */
interface FullPageLoadingProps {
  /**
   * Loading component props
   */
  loadingProps?: Omit<LoadingProps, "className">;
  /**
   * Optional message to display below spinner
   */
  message?: string;
}

export function FullPageLoading({ loadingProps, message }: FullPageLoadingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20 p-4">
      <Loading {...loadingProps} />
      {message && (
        <p className="mt-6 text-gray-600 text-base md:text-lg">{message}</p>
      )}
    </div>
  );
}
