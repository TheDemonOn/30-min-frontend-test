export function capitalizeFirstChar(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function secondsToTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)

  const parts: string[] = []

  if (hours > 0) {
    parts.push(String(hours).padStart(2, "0"))
  }

  parts.push(String(minutes).padStart(2, "0"))
  parts.push(String(secs).padStart(2, "0"))

  return parts.join(":")
}

export const animationDuration = 200
