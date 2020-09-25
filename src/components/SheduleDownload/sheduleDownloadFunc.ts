import jsPDF from 'jspdf';

function generatePDF() {
  window['html2canvas'] = html2canvas;
  var doc = new jsPDF('l', 'px', 'a4');
  doc.html(document.querySelector('.ant-picker-body'), {
    callback: function (pdf) {
      pdf.save('cv-a4.pdf');
    },
    margin: 10,
    x: 10,
    y: 10,
  });
}

export default generatePDF;
