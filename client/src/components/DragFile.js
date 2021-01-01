import styles from '../styles/dragFile.module.scss'
import {useDropzone} from 'react-dropzone'
function DragFile(){
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: ".txt",
        onDrop: (acceptedFiles) => {
          if(acceptedFiles.length){
              console.log(acceptedFiles)
            //savePhoto(
             // Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]), id:uuidv4() })
            //)
          }
        }
      })
    const getDragStyles = () => {
        return isDragActive ? styles.dragActive : '' 
    }  
    return(
        <div className={`${styles.dragFile} ${getDragStyles()}`} {...getRootProps()}>
            {isDragActive ? "Drop files" : 'Drag files'}
            <input {...getInputProps()} />
        </div>
    )
}

export default DragFile