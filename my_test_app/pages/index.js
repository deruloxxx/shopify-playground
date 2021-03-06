import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class Index extends React.Component {
  state = {open: false}
  render() {
    return (
      <Page
        title="Product selector"
        primaryAction={{
          content: 'Select products',
          onAction: () => this.setState({open: true})
        }}
      >
        <ResourcePicker
          resourceType='Product'
          open={this.state.open}
          onCancel={() => this.setState({open: false})}
          onSelection={(resources) => this.handleSelection(resources)}
        />
      </Page>
    )
  }
  handleSelection = (resources) => {
    const idFrameResources = resources.selection.map((product) => product.id);
    this.setState({open: false})
    console.log(idFrameResources);
  }
}
export default Index;
