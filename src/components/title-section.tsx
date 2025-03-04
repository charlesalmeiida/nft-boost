export function TitleWrapper({ ...props }: React.ComponentProps<"div">) {
  return <div {...props} className="space-y-1 mb-14" />
}

export function TagSection({ ...props }: React.ComponentProps<"span">) {
  return (
    <span {...props} className="text-xl font-semibold text-tag font-inter" />
  )
}

export function TitleSection({ ...props }: React.ComponentProps<"h2">) {
  return (
    <h1 {...props} className="text-5xl/tight font-poppins" />
  )
}
