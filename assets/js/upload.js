const fileNames = document.querySelector('#filenames')
const fileInput = document.querySelector('#file-input');
fileInput.addEventListener('input', () =>{
        for (let i = 0; i < fileInput.files.length; ++i) {
        let fileName = fileInput.files.item(i).name;
        let fileBlock = document.createElement('div');
        fileBlock.innerHTML = fileName;
        fileNames.append(fileBlock);
        fileBlock.classList.add(`file_${i}`);
}})

const droparea = document.querySelector('.droparea');


    droparea.addEventListener('dragenter', (e) =>{
        e.preventDefault();
        console.log('dragenter');
    });
    droparea.addEventListener('dragleave', (e) =>{
        e.preventDefault();
        console.log('dragleave');
    });
    droparea.addEventListener('dragover', (e) =>{
        e.preventDefault();
        console.log('dragover');
    });
    droparea.addEventListener('drop', (e) =>{
        e.preventDefault();
        console.log('drop');
        if (e.dataTransfer.items) {
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
              if (e.dataTransfer.items[i].kind === 'file') {
                let file = e.dataTransfer.items[i].getAsFile();
                let fileBlock = document.createElement('div');
                fileBlock.innerHTML = file.name;
                fileNames.append(fileBlock);
                fileBlock.classList.add(`file_${i}`);
                console.log('... file[' + i + '].name = ' + file.name);
              }
            }
          } else {
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
              console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
            }
        }
    });