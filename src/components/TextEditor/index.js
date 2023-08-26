import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  TextArea,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from './StyledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    text: '',
  }

  onBoldClick = () => {
    this.setState(p => ({
      isBold: !p.isBold,
    }))
  }

  onItalicClick = () => {
    this.setState(p => ({
      isItalic: !p.isItalic,
    }))
  }

  onUnderlineClick = () => {
    this.setState(p => ({
      isUnderline: !p.isUnderline,
    }))
  }

  onTextChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <div>
        <div>
          <div>
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div>
            <ul>
              <li>
                <BoldButton
                  type="button"
                  onClick={this.onBoldClick}
                  data-testid="bold"
                  isBold={isBold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  onClick={this.onItalicClick}
                  data-testid="italic"
                  isItalic={isItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  type="button"
                  onClick={this.onUnderlineClick}
                  data-testid="underline"
                  isUnderline={isUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ul>
            <TextArea
              cols="100"
              rows="20"
              onChange={this.onTextChange}
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
