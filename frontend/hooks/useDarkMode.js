import { useState } from 'react'

export function useDarkMode() {
    const [dark, setDark] = useState(false)
    return [dark, setDark]
}