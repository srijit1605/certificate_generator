const newSheetId = '1hw4ikIJ3w0nYY9BSneKGwOHt0A1-Uitj';
const base = `https://docs.google.com/spreadsheets/d/${newSheetId}/gviz/tq?`;
const sheetName = 'sample-data';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`
const userPosDisp = document.getElementById("userPosDisp");
const userCert = document.getElementById("cert");
const submitBtn = document.getElementById("submitBtn");
const { PDFDocument, rgb, degrees } = PDFLib;

const data = []
let time;
let distance;
let participants;

const newData = {"version":"0.6","reqId":"0","status":"ok","sig":"965851464","table":{"cols":[{"id":"A","label":"S.No.","type":"number","pattern":"General"},{"id":"B","label":"Sequence Value","type":"number","pattern":"General"},{"id":"C","label":"Attendee Name","type":"string"},{"id":"D","label":"Attendee Email","type":"string"},{"id":"E","label":"Ticket_Name","type":"string"},{"id":"F","label":"Distance","type":"number","pattern":"General"}],"rows":[{"c":[{"v":1.0,"f":"1"},{"v":5001.0,"f":"5001"},{"v":"Anshima Nishith Kolatkar"},{"v":"anshima.fans@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":2.0,"f":"2"},{"v":5002.0,"f":"5002"},{"v":"Geeta S Kolatkar"},{"v":"pskolatkar@hotmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":3.0,"f":"3"},{"v":5003.0,"f":"5003"},{"v":"Prashant Mishra"},{"v":"pramilapmishra@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":4.0,"f":"4"},{"v":5004.0,"f":"5004"},{"v":"Apoorv Kapse"},{"v":"apoorv.kapse@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":5.0,"f":"5"},{"v":5005.0,"f":"5005"},{"v":"Shikha Kapse"},{"v":"shikhuak@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":6.0,"f":"6"},{"v":5006.0,"f":"5006"},{"v":"Swarsangeeta Patil"},{"v":"swarsangeeta.patil@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":7.0,"f":"7"},{"v":5007.0,"f":"5007"},{"v":"Sunil Sao"},{"v":"sao.sunil@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":8.0,"f":"8"},{"v":5008.0,"f":"5008"},{"v":"Ashwini Pimprikar"},{"v":"ashwini.pimprikar@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":9.0,"f":"9"},{"v":5009.0,"f":"5009"},{"v":"Ayush Pimprikar"},{"v":"ashwini.pimprikar@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":10.0,"f":"10"},{"v":5010.0,"f":"5010"},{"v":"Shreya Sawant"},{"v":"shreya.sawant@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":11.0,"f":"11"},{"v":5011.0,"f":"5011"},{"v":"Nidhi Jayant Deshmukh"},{"v":"nidhi.deshmukh@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":12.0,"f":"12"},{"v":5012.0,"f":"5012"},{"v":"Sanskruti Dhamale"},{"v":"sanskruti.dhamale@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":13.0,"f":"13"},{"v":5013.0,"f":"5013"},{"v":"Ankita Vasant Randhir"},{"v":"ankita.randhir@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":14.0,"f":"14"},{"v":5014.0,"f":"5014"},{"v":"Akshay Nitin Kamble"},{"v":"akshay.kamble@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":15.0,"f":"15"},{"v":5015.0,"f":"5015"},{"v":"Varsha Thakur"},{"v":"varsha.thakur1193@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":16.0,"f":"16"},{"v":5016.0,"f":"5016"},{"v":"Ghanshyam Rajput"},{"v":"varsha.thakur1193@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":17.0,"f":"17"},{"v":5017.0,"f":"5017"},{"v":"Bhagyalaxmi Girish"},{"v":"bhagyalaxmi.girish@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":18.0,"f":"18"},{"v":5018.0,"f":"5018"},{"v":"Kapil Bhat"},{"v":"kapbhat03@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":19.0,"f":"19"},{"v":5019.0,"f":"5019"},{"v":"Gaurav Kapse"},{"v":"kapse.gaurav14@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":20.0,"f":"20"},{"v":5020.0,"f":"5020"},{"v":"Deepali Satpute"},{"v":"deepali.samak@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":21.0,"f":"21"},{"v":5021.0,"f":"5021"},{"v":"Aishwarya Chougule"},{"v":"aishwaryachougule2000@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":22.0,"f":"22"},{"v":5022.0,"f":"5022"},{"v":"Ritesh Mahajan"},{"v":"riteshmahajancs@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":23.0,"f":"23"},{"v":5023.0,"f":"5023"},{"v":"Keyur Mahajan"},{"v":"riteshmahajancs@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":24.0,"f":"24"},{"v":5024.0,"f":"5024"},{"v":"Shruti Deshkar"},{"v":"shrutideshkar0208@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":25.0,"f":"25"},{"v":5026.0,"f":"5026"},{"v":"Suman Prajapati"},{"v":"suman.prajapati@inspiritvision.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":26.0,"f":"26"},{"v":5027.0,"f":"5027"},{"v":"Shivkumar Kabra"},{"v":"shivkumarkabra@gmail.com"},{"v":"CDM - 5 KM Run"},{"v":5.0,"f":"5"}]},{"c":[{"v":27.0,"f":"27"},{"v":10002.0,"f":"10002"},{"v":"Umesh Gawande"},{"v":"ugawande@gmail.com"},{"v":"CDM - 10 KM Run"},{"v":10.0,"f":"10"}]},{"c":[{"v":28.0,"f":"28"},{"v":10003.0,"f":"10003"},{"v":"Girish Gopinathan"},{"v":"girishg@amdocs.com"},{"v":"CDM - 10 KM Run"},{"v":10.0,"f":"10"}]},{"c":[{"v":29.0,"f":"29"},{"v":10004.0,"f":"10004"},{"v":"Prasad Chavan"},{"v":"prasadzambare@gmail.com"},{"v":"CDM - 10 KM Run"},{"v":10.0,"f":"10"}]},{"c":[{"v":30.0,"f":"30"},{"v":10005.0,"f":"10005"},{"v":"Prashant Khoje"},{"v":"prashant.khoje+run@gmail.com"},{"v":"CDM - 10 KM Run"},{"v":10.0,"f":"10"}]},{"c":[{"v":31.0,"f":"31"},{"v":10006.0,"f":"10006"},{"v":"Devagya Khalya"},{"v":"dev21khalya@gmail.com"},{"v":"CDM - 10 KM Run"},{"v":10.0,"f":"10"}]},{"c":[{"v":32.0,"f":"32"},{"v":10007.0,"f":"10007"},{"v":"Rahul gupta"},{"v":"rg276575@gmail.com"},{"v":"CDM - 10 KM Run"},{"v":10.0,"f":"10"}]},{"c":[{"v":33.0,"f":"33"},{"v":10008.0,"f":"10008"},{"v":"Triyansh Jain"},{"v":"triyansh.jain@inspiritvision.com"},{"v":"CDM - 10 KM Run"},{"v":10.0,"f":"10"}]},{"c":[{"v":34.0,"f":"34"},{"v":15001.0,"f":"15001"},{"v":"Shrikant Yashwant Kolatkar"},{"v":"pskolatkar@hotmail.com"},{"v":"CDM - 15 KM Run"},{"v":15.0,"f":"15"}]},{"c":[{"v":35.0,"f":"35"},{"v":15002.0,"f":"15002"},{"v":"Kalyan Yeole"},{"v":"kalyan.yeole@gmail.com"},{"v":"CDM - 15 KM Run"},{"v":15.0,"f":"15"}]},{"c":[{"v":36.0,"f":"36"},{"v":15003.0,"f":"15003"},{"v":"Mohsin khan"},{"v":"mohsinkhanmit26@gmail.com"},{"v":"CDM - 15 KM Run"},{"v":15.0,"f":"15"}]},{"c":[{"v":37.0,"f":"37"},{"v":15004.0,"f":"15004"},{"v":"Abhay Satpute"},{"v":"abhaysatpute@gmail.com"},{"v":"CDM - 15 KM Run"},{"v":15.0,"f":"15"}]}],"parsedNumHeaders":1}}


$(document).ready(() => {
  // $.get(url, (data) => {
    participants = JSON.parse(data.substring(47).slice(0, -2));
    // participants = newData;
    console.log(participants.table.rows);
    for (i = 0; i < participants.table.rows.length; i++) {
      var participantName = participants.table.rows[i].c[2].v;
      console.log(distance)
      $("#participantSelect").append(
        $("<option>", {
          value: participantName,
          text: participantName,
        })
      );
    }
    $("#participantList").show();
    $("#loading").hide();
  // });
});

$("#participantList").submit((e) => {
  e.preventDefault();
  time = $("#appt").val();
console.log(time, time.split(":"))
  displayParticipants($("#participantSelect").val());
  const val = $("#participantSelect").val();
  if (val.trim() !== "") {
      generatePDF(val, `${distance} KMS`);
  }
});

const displayParticipants = (name) => {
  if (userCert.value == "participant") {
  for (i = 0; i < participants.table.rows.length; i++) {
    var runner = participants.table.rows[i].c;
    if (runner[2].v == name) {
      
      distance = participants.table.rows[i].c[5].v
      $("#participantDetails").html(
        "Name : " +
          runner[2].v +
          " Distance : " +
          distance +
          "KMS" +
          " Number : " +
          runner[1].v +
          " time taken : " +
          time
      );
      $("#participantDetails").show();
    }
  }
}
};

console.log("hello");
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

userCert.addEventListener("change", () => {
  if (userCert.value == "participant") {
    userPosDisp.style.display = "block";
  } else {
    userPosDisp.style.display = "none";
  }
});


const generatePDF = async (name, pos) => {
  let existingPdfBytes
  if (userCert.value == "participant") {
    existingPdfBytes = await fetch("TEMPLATE_RUNNERS.pdf").then((res) =>
    res.arrayBuffer()
  );
  } else if (userCert.value == "volunteer") {
    existingPdfBytes = await fetch("certificate_marathon_volunteer.pdf").then((res) =>
    res.arrayBuffer());
  }

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("./HATTEN.TTF").then((res) =>
    res.arrayBuffer()
  );

  const fontBytes1 = await fetch("./StencilStd_0.otf").then((res) =>
    res.arrayBuffer()
  );
  // Embed our custom font in the document
  const SanChezFont = await pdfDoc.embedFont(fontBytes1);
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const textSize = 44;
  const textWidth1 = SanChezFont.widthOfTextAtSize(name, textSize);

  // Draw a string of text diagonally across the first page
  if (userCert.value == "participant") {
    firstPage.drawText(name, {
      x: firstPage.getWidth() / 2 - textWidth1 / 2,
      y: 290,
      size: textSize,
      font: SanChezFont,
      color: rgb(1, 0, 0),
    });
  } else {
    firstPage.drawText(name, {
      x: firstPage.getWidth() / 2 - textWidth1 / 2,
      y: 310,
      size: textSize,
      font: SanChezFont,
      color: rgb(1, 0, 0),
    });
  }

  const ErasMed = await pdfDoc.embedFont(fontBytes);
  const textSize1 = 34;
  const textSize3 = 30;
  console.log(pos, distance);
  if (userCert.value == "participant") {
    firstPage.drawText(pos, {
      x: 500,
      y: 230,
      size: textSize1,
      font: ErasMed,
      color: rgb(0.5, 0, 0),
    });

  firstPage.drawText(`${time.split(":")[0]}       ${time.split(":")[1]}       ${time.split(":")[2]}`, {
    x: 158,
    y: 41.5,
    size: textSize3,
    font: ErasMed,
    color: rgb(0.5, 0, 0),
  });
}

  firstPage.drawText(`${day}        ${month}        ${year}`, {
    x: 592,
    y: 41.5,
    size: textSize3,
    font: ErasMed,
    color: rgb(0.5, 0, 0),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(pdfDataUri, "newcertificate.pdf");
};
