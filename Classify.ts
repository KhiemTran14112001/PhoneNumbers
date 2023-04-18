function Classify(phoneNumbers: string[]) {
    let viettel: string[] = ['037', '038', '039', '070'];
    let mobifone: string[] = ['090', '093', '089'];
    let vinaphone: string[] = ['081', '082', '083', '084', '085'];
    let viettelPhoneNumbers: string[] = [];
    let mobifonePhoneNumbers: string[] = [];
    let vinaphonePhoneNumbers: string[] = [];
    phoneNumbers.forEach(item => {
        viettel.forEach(prefix => {
            if (item.substring(0, 3) === prefix) {
                viettelPhoneNumbers.push(item);
            }
        })
        mobifone.forEach(prefix => {
            if (item.substring(0, 3) === prefix) {
                mobifonePhoneNumbers.push(item);
            }
        })
        vinaphone.forEach(prefix => {
            if (item.substring(0, 3) === prefix) {
                vinaphonePhoneNumbers.push(item);
            }
        })
    })
    console.log(`Viettel: ${viettelPhoneNumbers}`);
    console.log(`Mobifone: ${mobifonePhoneNumbers}`);
    console.log(`Vinaphone: ${vinaphonePhoneNumbers}`);
}

let phoneNumbers: string[] = ['0378901234', '0901234567', '081345678', '0389012345', '0934567890',
    '0823456789', '0390123456', '0890123456', '0834567890', '0701234567', '0845678901', '0856789012'];
Classify(phoneNumbers);

