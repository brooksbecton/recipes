
import * as React from 'react';
export const Tag: React.FunctionComponent = ({ children, ...props }) => {
    return (
        <span
            aria-label={`Tag ${children}`}
            {...props}
            className=" cursor-pointer inline-block hover:bg-green-200 bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800"
        >
            {children}
        </span>
    )
}