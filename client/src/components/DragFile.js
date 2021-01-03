import styles from '../styles/dragFile.module.scss'
import {connect} from 'react-redux'
import {importFile} from '../actions/'
import {useDropzone} from 'react-dropzone'
function DragFile({importFile}){
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: ".txt",
        onDrop: (acceptedFiles) => {
          if(acceptedFiles.length){
             importFile(acceptedFiles[0])
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

export default connect(null, {importFile})(DragFile)