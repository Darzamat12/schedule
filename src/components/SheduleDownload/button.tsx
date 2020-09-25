import React from 'react'
import generatePDF from './sheduleDownloadFunc'
export function ButtonDownload() {
  return <button onClick={() => generatePDF()}>AAA</button>
}