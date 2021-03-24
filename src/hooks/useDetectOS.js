export const useDetectOS = () => {
  const OS = navigator.userAgent
  return OS.indexOf("Windows") !== -1 ? "PowerShell" : "Bash"  
}