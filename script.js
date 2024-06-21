document.getElementById('saveImage').addEventListener('click', function() {
    const referenceNumber1 = document.getElementById('referenceNumber1').value || "-";
    const referenceNumber = document.getElementById('referenceNumber').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const recipientName = document.getElementById('recipientName').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const notes = document.getElementById('notes').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=1200,height=955');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/an/blob/main/2.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 55px; left: 497px; color:#656565; font-size: 55px; font-weight: bold;">หนังสือรับรอง</p>
                <p style="position: absolute; top: 145px; left: 410px; color:#656565; font-size: 26px; font-weight: bold;">เรื่อง : การยืนยันตัวตนเข้าระบบเพื่อแก้ไขข้อมูลธนาคาร</p>
                <p style="position: absolute; top: 183px; left: 58px; color:#656565; font-size: 26px; font-weight: bold;">ที่194/2567</p>
                <p style="position: absolute; top: 208px; left: 58px; color:#656565; font-size: 26px;font-weight: bold;">วันที่อนุมัติ ${transactionDate}</p>
                <p style="position: absolute; top: 233px; left: 60px; color:#656565; font-size: 26px;font-weight: bold;">เรียน : ${accountNumber}</p>
                <p style="position: absolute; top: 258px; left: 60px; color:#656565; font-size: 26px;font-weight: bold;">หมายเลขบัตรประจำตัว : ${referenceNumber}</p>
                <p style="position: absolute; top: 283px; left: 60px; color:#656565; font-size: 26px;font-weight: bold;">สัญญาสินเชื่อเลขที่ CODE : ${referenceNumber1}</p>
                                
                <p style="position: absolute; top: 330px; left: 130px; color:#656565; font-size: 26px;font-weight: bold;width: 80%;"">เนื่องด้วยวันที่ ${transactionDate} ทางระบบสินเชื่อไม่สามารถดําเนินการโอนวงเงินสินเชื่อ จํานวน ${recipientName} บาท ไปยังบัญชีของลูกค้า คุณ${accountNumber}ได้ เนื่องจากลูกค้าได้ทําการกรอกเลขบัญชีเข้ามาผิด ดังนั้นระบบจึงล็อคหรืออายัดยอดเงินในระบบทั้งหมด เพื่อรอการยืนยันตัวตนและแก้ไข 
ขั้นตอนการยืนยันตัวตน เนื่องด้วยในระบบเป็นข้อมูลของ คุณ สมิทธ์ ศรีโชติ จึงจําเป็นต้องยื่นเรื่องแก้ไขให้แล้วเสร็จและทําการถอนเงินออกทันที ดังนั้นลูกค้าจึงต้องยื่นเรื่องยืนยันตัวตนและแก้ไข เพื่อปลดล็อคอายัดวงเงินทั้งหมด</p>
               
                              <p style="position: absolute; top: 495px; left: 130px; color:#656565; font-size: 26px;font-weight: bold;width: 78%;"">โดยที่ลูกค้าต้องใช้บัญชีที่ถูกต้องทํารายการฝากหลักทรัพย์เข้าระบบกระเป๋าตังค์ของลูกค้าเอง จํานวน ${amount} บาท
                              เพื่อดําเนินการการยืนยันและแก้ไขข้อมูลให้ถูกต้อง หลังจากนั้นระบบจะดําเนินการแก้ไขและปลดล็อคยอดเงินทั้งหมด ไม่เกิน 3-5 นาที 
ลูกค้าจะสามารถถอนยอดเงินที่ทํารายการพร้อมกับวงเงินสินเชื่อได้ทั้งหมด ${notes} บาท
ระบบ กระเป๋าตังค์ หรือ SMART CONTRACT คือ ระบบดําเนินการด้านการเงินอัตโนมัติทางบริษัทจึงไม่สามารถดึงวงเงินสินเชื่อกลับบัญชีหลักที่สั่งจ่ายได้</p>


                              <p style="position: absolute; top: 850px; left: 80px; color:#dd0f0f; font-size: 26px;font-weight: bold;width: 80%;"">หมายเหตุ : </p>
               <p style="position: absolute; top: 850px; left: 168px; color:#656565; font-size: 26px;font-weight: bold;width: 78%;"">1.จํานวนเงินที่ทางบริษัทให้ลูกค้าดําเนินการเข้ามา ลูกค้าไม่ได้เสียเงินในส่วนนี้ ระบบจะทําการโอนเงินคืนเข้า “กระเป๋าตังค์” 
ในระบบให้ลูกค้าพร้อมกับวงเงินต้นที่ยื่นกู้</p>

<p style="position: absolute; top: 647px; left: 785px; color:#656565; font-size: 26px;font-weight: bold;">ออกให้เมื่อวันที่ ${transactionDate}</p>
<p style="position: absolute; top: 680px; left: 810px; color:#656565; font-size: 26px;font-weight: bold;">บสย ธนาคารพัฒนาวิสาหกิจ</p>
<p style="position: absolute; top: 780px; left: 820px; color:#656565; font-size: 26px;font-weight: bold;">( นางนาตยา ดังกลาง )</p>
<p style="position: absolute; top: 815px; left: 810px; color:#656565; font-size: 26px;font-weight: bold;">ผู้จัดการฝ่ายธุรกรรมบริษัท</p>
              

            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
