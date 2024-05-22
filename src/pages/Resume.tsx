import resume from "../assets/docs/myresume.pdf"
import { Document } from 'react-pdf';

function Resume() {

  return (
    <div className="bg-[#f5f5b2] dark:bg-black gridLinesBackground pt-[5rem] w-full h-screen">
      <Document file={resume}>
        <p>My Resume</p>
      </Document>
      <h2>resume</h2>
    </div>
  )
}

export default Resume