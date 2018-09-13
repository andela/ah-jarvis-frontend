import config from '../config';

const uploader = obj => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method || 'POST', obj.url || config.UPLOAD_URL);
  if (obj.headers) {
    Object.keys(obj.headers).forEach((key) => {
      xhr.setRequestHeader(key, obj.headers[key]);
    });
  }
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject(xhr.statusText);
    }
  };
  xhr.onerror = () => reject(xhr.statusText);
  xhr.upload.addEventListener('progress', obj.progress);
  const fd = new FormData();
  fd.append('upload_preset', 'jaaktgvk');
  fd.append('file', obj.body);
  xhr.send(fd);
});

export default uploader;
