import type React from 'react'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const boxVariants = cva(['w-full border transition-all duration-300 border-border rounded-3xl'], {
  variants: {
    variant: {
      primary: 'bg-background-primary border border-border',
      secondary: 'bg-background-secondary border border-border'
    },
    padding: {
      default: 'px-4 py-3',
      nice: 'p-4 pt-3',
      small: 'p-2',
      none: ''
    }
  },
  defaultVariants: {
    padding: 'default',
    variant: 'secondary'
  }
})

export type BoxProps = ComponentProps<'div'> & VariantProps<typeof boxVariants>

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  padding,
  variant,
  ...props
}: BoxProps): React.ReactNode => (
  <div {...props} className={cn(boxVariants({ className, padding, variant }))}>
    {children}
  </div>
)

Box.displayName = 'Box'
