import React from "react";
import EditorContainer from "./Editor/containers/EditorContainer";
import SketchesPageContainer from "./Sketches/containers/SketchesContainer";
import "styles/Main.scss";
import ProfilePanelContainer from "./common/containers/ProfilePanelContainer";

class Editor extends React.Component {
  renderSketchesPage = () => <SketchesPageContainer />;

  renderEditor = () => <EditorContainer />;

  renderContent = () => {
    switch (this.props.contentType) {
      case "sketches":
        return this.renderSketchesPage();
      case "editor":
      default:
        return this.renderEditor();
    }
  };

  render() {
    return (
      <div className="main">
        <ProfilePanelContainer contentType={this.props.contentType} />
        {this.renderContent()}
      </div>
    );
  }
}

export default Editor;
