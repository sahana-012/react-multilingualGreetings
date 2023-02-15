import {Component} from 'react'
import TabItem from './components/TabItem'
import Image from './components/Image'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeLanguage: languageGreetingsList[0].id}

  clickTabItem = languageId => {
    this.setState({activeLanguage: languageId})
  }

  getSelectedLanguage = () => {
    const {activeLanguage} = this.state
    const selectedLanguage = languageGreetingsList.filter(
      eachLanguageDetails => eachLanguageDetails.id === activeLanguage,
    )
    return selectedLanguage
  }

  render() {
    const {activeLanguage} = this.state
    const selectedLanguage = this.getSelectedLanguage()
    console.log(selectedLanguage)

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(languageDetails => (
            <TabItem
              key={languageDetails.id}
              languageDetails={languageDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeLanguage === languageDetails.id}
            />
          ))}
        </ul>
        {selectedLanguage.map(languageDetails => (
          <Image key={languageDetails.Id} languageDetails={languageDetails} />
        ))}
        {/* <img
          src={selectedLanguage.imageUrl}
          alt={selectedLanguage.imageAltText}
        /> */}
      </div>
    )
  }
}
export default App
