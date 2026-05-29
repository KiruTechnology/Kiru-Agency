/**
 * OptimizedImage Component
 *
 * Provides lazy loading, responsive images, and performance optimizations.
 *
 * Usage:
 * <OptimizedImage
 *   src="/assets/projects/flowboard-dashboard.webp"
 *   alt="FlowBoard Analytics"
 *   priority={false}
 * />
 */

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function OptimizedImage({
  src,
  alt,
  priority = false,
  className,
  style,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={className}
      style={{
        maxWidth: "100%",
        height: "auto",
        display: "block",
        ...style,
      }}
    />
  );
}
