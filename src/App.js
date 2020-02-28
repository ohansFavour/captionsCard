import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";
import CaptionsPage from "./pages/captionspage/captionspage";
import TagsPage from "./pages/tagspage/tagspage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tags" component={TagsPage} />
        <Route exact path="/captions" component={CaptionsPage} />
      </Switch>
    </div>
  );
}

export default App;
