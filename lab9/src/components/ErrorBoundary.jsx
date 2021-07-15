
import React from "react";
// import Score from "../website_images/score.png";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div>
                {/* <img src = {Score} alt = "score" width = "100%" height = "200px"> </img> */}
            <h1>Your IQ is 100 and you are in the 95th percentile!</h1>
            </div>
            
            )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;