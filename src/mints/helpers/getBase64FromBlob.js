import Promise from 'bluebird';

export default function (blob) {
    return new Promise((resolve, reject) => {
        if (blob) {
            var reader = new FileReader();
            reader.readAsDataURL(blob); 
            reader.onloadend = function() {
                resolve(reader.result); 
            }
            reader.onerror = function() {
                reject(reader.error);
            }
        } else {
            reject('Requires blob as parameter.');
        }
    })
}