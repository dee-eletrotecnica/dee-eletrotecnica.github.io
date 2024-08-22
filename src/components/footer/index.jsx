import { FooterStyles } from "./styles"


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <FooterStyles>
            <div className="container">
                <div className="row">
                    <div>
                        <p>Copyright &copy; {currentYear}</p>
                    </div>
                </div>
            </div>
        </FooterStyles>
    )
}
