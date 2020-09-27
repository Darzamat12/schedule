import jsPDF from 'jspdf';

function generatePDF(scheduleMode) {
  window.html2canvas = html2canvas;
  const doc = new jsPDF('l', 'pt', 'a4');
  const path =
    scheduleMode === 0
      ? '.ant-table-content'
      : scheduleMode === 1
      ? '.list-wrapper'
      : scheduleMode === 2
      ? '.ant-picker-body'
      : '';

  doc.html(document.querySelector(path), {
    callback: function (pdf) {
      pdf.save('cv-a4.pdf');
    },
    margin: 10,
    x: 10,
    y: 10,
  });
}

export default generatePDF;
