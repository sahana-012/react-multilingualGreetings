import './index.css'

const Image = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return <img className="image" src={imageUrl} alt={imageAltText} />
}

export default Image
