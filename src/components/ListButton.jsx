import React from 'react'
import ButtonForms from './ButtonForms'
import './ListButton.css'

function ListButton() {
  return (
    <div className='container'>
        <div className='row'>
            <div className="lista">
                <ButtonForms transparent={false} background="#1c74e4" textColor="white" showSymbol={false} border={false} disabled={false}  height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={false} background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="left" border={false} disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>    
                <ButtonForms transparent={false} background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="right"  border={false} disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>
            </div>
            <div className="lista">
                <ButtonForms transparent={false} background="#3c94ec" textColor="white" showSymbol={false} border={false} disabled={false}  height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={false} background="#3c94ec" textColor="white" showSymbol={true} symbolPosition="left" border={false} disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>    
                <ButtonForms transparent={false} background="#3c94ec" textColor="white" showSymbol={true} symbolPosition="right" border={false} disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>
            </div>
            <div className="lista">
                <ButtonForms transparent={false} background="#bac9dd" textColor="grey" showSymbol={false} border={false} disabled={true}  height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={false} background="#bac9dd" textColor="grey" showSymbol={true} symbolPosition="left" border={false} disabled={true} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>    
                <ButtonForms transparent={false} background="#bac9dd" textColor="grey" showSymbol={true} symbolPosition="right" border={false} disabled={true} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>
            </div>
        </div>
        <div className='row'>
            <div className="lista">
                <ButtonForms transparent={false} background="white" textColor="#1c74e4" showSymbol={false} border={true} borderColor="#1c74e4" disabled={false}  height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={false} background="white" textColor="#1c74e4" showSymbol={true} symbolPosition="left" border={true} borderColor="#1c74e4" disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>    
                <ButtonForms transparent={false} background="white" textColor="#1c74e4" showSymbol={true} symbolPosition="right" border={true}borderColor="#1c74e4" disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>
            </div>
            <div className="lista">
                <ButtonForms transparent={false} background="#e0f8f4" textColor="#1c74e4" showSymbol={false} border={true} borderColor="#1c74e4" disabled={false}  height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={false} background="#e0f8f4" textColor="#1c74e4" showSymbol={true} symbolPosition="left" border={true} borderColor="#1c74e4" disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>    
                <ButtonForms transparent={false} background="#e0f8f4" textColor="#1c74e4" showSymbol={true} symbolPosition="right" border={true}borderColor="#1c74e4" disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>
            </div>
            <div className="lista">
                <ButtonForms transparent={false} background="#e0f8f4" textColor="#1c74e4" showSymbol={false} border={true} borderColor="#1c74e4" disabled={true}  height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={false} background="#e0f8f4" textColor="#1c74e4" showSymbol={true} symbolPosition="left" border={true} borderColor="#1c74e4" disabled={true} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>    
                <ButtonForms transparent={false} background="#e0f8f4" textColor="#1c74e4" showSymbol={true} symbolPosition="right" border={true}borderColor="#1c74e4" disabled={true} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>
            </div>
        </div>
        <div className="row">
            <div className="lista2">
                <ButtonForms transparent={true}  textColor="#1c74e4" showSymbol={false} border={false}  disabled={false}  height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={true}  textColor="#1c74e4" showSymbol={false} border={false}  disabled={false}  underline={true} height='35px'>
                    LABEL
                </ButtonForms>
                <ButtonForms transparent={true}  textColor="#1c74e4" showSymbol={true} symbolPosition="left" border={false}  disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>    
                <ButtonForms transparent={true}  textColor="#1c74e4" showSymbol={true} symbolPosition="right" border={false}  disabled={false} icon="bi bi-plus" height='35px'>
                    LABEL
                </ButtonForms>
            </div>
        </div>
    </div>
    
  )
}

export default ListButton