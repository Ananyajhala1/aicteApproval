const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');
const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytesResumable, getDownloadURL } = require('@firebase/storage');


async function createPdf(input, output) {
    try {
        const pdfDoc = await PDFDocument.load(await readFile(input));

        // Get the form fields
        const form = pdfDoc.getForm();
        const fieldNames = form.getFields().map((field) => field.getName());
            form.getTextField(fieldNames[0]).setText("AICTE")
            form.getTextField(fieldNames[1]).setText("Prakhar Jain")
            form.getTextField(fieldNames[2]).setText("Ananya Jhala")
            form.getTextField(fieldNames[3]).setText("1")
            form.getTextField(fieldNames[4]).setText("19/12/2023")
            form.getTextField(fieldNames[5]).setText("7:00 pm")
            form.getTextField(fieldNames[6]).setText("-------")
            form.getTextField(fieldNames[7]).setText("AICTE")
            form.getTextField(fieldNames[8]).setText("Govt.of India")
            form.getTextField(fieldNames[9]).setText("1")
            form.getTextField(fieldNames[10]).setText("Prakhar Jain")
            form.getTextField(fieldNames[11]).setText("67")
            form.getTextField(fieldNames[12]).setText("10")
            form.getTextField(fieldNames[13]).setText("20225, 19/12/2023")
            form.getTextField(fieldNames[14]).setText("20")
            form.getTextField(fieldNames[15]).setText("Raigarh")
            form.getTextField(fieldNames[16]).setText("OP Jindal")
            form.getTextField(fieldNames[17]).setText("20")
            form.getTextField(fieldNames[18]).setText("19/12/2023")
            form.getTextField(fieldNames[19]).setText("Ananya Jhala")
            form.getTextField(fieldNames[20]).setText("20")
            form.getTextField(fieldNames[21]).setText("AICTE")
            form.getTextField(fieldNames[22]).setText("10")
            form.getTextField(fieldNames[23]).setText("19/10/2023")
            form.getTextField(fieldNames[24]).setText("Prakhar Jain")
            form.getTextField(fieldNames[25]).setText("20")
            form.getTextField(fieldNames[26]).setText("AICTE")
            form.getTextField(fieldNames[27]).setText("10")
            form.getTextField(fieldNames[28]).setText("19/12/2023")
            form.getTextField(fieldNames[29]).setText("10")
            form.getTextField(fieldNames[30]).setText("19/12/2023")
            form.getTextField(fieldNames[31]).setText("Ananya Jhala")
            form.getTextField(fieldNames[32]).setText("City Land")
            form.getTextField(fieldNames[33]).setText("Prakhar Jain")
            form.getTextField(fieldNames[34]).setText("Gandhinagar")
            form.getTextField(fieldNames[35]).setText("IIIT Vadodara")
            form.getTextField(fieldNames[36]).setText("Gandhinagar")
            form.getTextField(fieldNames[37]).setText("Ananya Jhala")
            form.getTextField(fieldNames[38]).setText("AICTE")
            form.getTextField(fieldNames[39]).setText("1")
            form.getTextField(fieldNames[40]).setText("200")
            form.getTextField(fieldNames[41]).setText("19/12/2023")
            form.getTextField(fieldNames[42]).setText("AICTE")
            form.getTextField(fieldNames[43]).setText("1")
            form.getTextField(fieldNames[44]).setText("100")
            form.getTextField(fieldNames[45]).setText("Classroom")
            form.getTextField(fieldNames[46]).setText("100")
            form.getTextField(fieldNames[47]).setText("Yes")
            form.getTextField(fieldNames[48]).setText("Yes")
            form.getTextField(fieldNames[49]).setText("Yes")
            form.getTextField(fieldNames[50]).setText("Prakhar Jain")
            form.getTextField(fieldNames[51]).setText("300")
            form.getTextField(fieldNames[52]).setText("19/12/2023")
            form.getTextField(fieldNames[53]).setText("Ananya Jhala")
            form.getTextField(fieldNames[54]).setText("54")
            form.getTextField(fieldNames[55]).setText("19/12/2023")
            form.getTextField(fieldNames[56]).setText("19/12/2023")
            form.getTextField(fieldNames[57]).setText("Raigarh")
            form.getTextField(fieldNames[58]).setText("Prakhar Jain")
            form.getTextField(fieldNames[59]).setText("202251099")
            form.getTextField(fieldNames[60]).setText("SBI Gandhinagar")
            form.getTextField(fieldNames[61]).setText("Prakhar Jain")
            form.getTextField(fieldNames[62]).setText("IIIT Vadodara")
            form.getTextField(fieldNames[63]).setText("Ananya Jhala")
            form.getTextField(fieldNames[64]).setText("SBI Gandhinagar")
            form.getTextField(fieldNames[65]).setText("Prakhar Jain")
            form.getTextField(fieldNames[66]).setText("19/12/2023")
            form.getTextField(fieldNames[67]).setText("1000000")
            form.getTextField(fieldNames[68]).setText("1")
            form.getTextField(fieldNames[69]).setText("67")
            form.getTextField(fieldNames[70]).setText("19/12/2023")
            form.getTextField(fieldNames[71]).setText("19/12/2024")
            form.getTextField(fieldNames[72]).setText("100000")
            form.getTextField(fieldNames[73]).setText("SBI Gandhinagar")
            form.getTextField(fieldNames[74]).setText("19/12/2023")
            form.getTextField(fieldNames[75]).setText("Raigarh")
        // Save the modified PDF
        const pdfBytes = await pdfDoc.save();
        await writeFile(output, pdfBytes);

        console.log("PDF modified and saved successfully");
        
       
            // Your Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyCZPMUZC2Z22Mo-Ujcq8DxZhTzIE6Olq94",
                authDomain: "react-firebase-storage-cc9e4.firebaseapp.com",
                projectId: "react-firebase-storage-cc9e4",
                storageBucket: "react-firebase-storage-cc9e4.appspot.com",
                messagingSenderId: "997388989426",
                appId: "1:997388989426:web:6d15c64532ee7f52efb16b"
              };
              
        

        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);

        // Upload the modified PDF to Firebase Storage
        const storageRef = ref(storage, '/path/to/upload/result.pdf');
        const uploadTask = uploadBytesResumable(storageRef, pdfBytes);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Track upload progress if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
            },
            (error) => {
                console.error('Error during upload:', error);
            },
            async () => {
                // Upload complete, get download URL
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('Download URL:', downloadURL);
            }
        );
    } catch (error) {
        console.log(error);
    }
}


createPdf("pdf/form5.pdf", "result.pdf");

