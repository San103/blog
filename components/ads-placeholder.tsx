import React from 'react'
import { cn } from '@/lib/utils'

interface AdsPlaceholderProps {
    className?: string
    size?: 'small' | 'medium' | 'large'
    title?: string
}

export function AdsPlaceholder({
    className,
    size = 'medium',
    title = "Advertisement"
}: AdsPlaceholderProps) {
    const sizeClasses = {
        small: 'h-32',
        medium: 'h-48',
        large: 'h-64'
    }

    return (
        <div
            className={cn(
                'border border-dashed border-border rounded-lg flex items-center justify-center bg-muted/30',
                sizeClasses[size],
                className
            )}
        >
            <div className="text-center space-y-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {title}
                </div>
                <div className="text-xs text-muted-foreground/70">
                    300 x 250
                </div>
            </div>
        </div>
    )
} 