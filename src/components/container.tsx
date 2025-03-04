export function Container({ ...props }: React.ComponentProps<"div">) {
  return <div {...props} className="w-full max-w-grid mx-auto px-3" />
}
