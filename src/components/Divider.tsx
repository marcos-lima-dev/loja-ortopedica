// src/components/Divider.tsx
type DividerProps = {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div 
      className={`w-[1192.5px] h-0 ${className}`}
      style={{
        marginLeft: '88.5px',
        borderTop: '1px solid #EBEBEB'
      }}
    />
  )
}