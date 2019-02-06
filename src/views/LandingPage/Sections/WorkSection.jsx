import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes, labels } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>{labels.contactTitle}</h2>
            <h4 className={classes.description}>
              <p>{labels.contactDescription.p1}</p>
              <p>{labels.contactDescription.p2}</p>
              <p>
                <b>{labels.contactDescription.b3}</b>
                {labels.contactDescription.p3}
              </p>
              <p>
                <b>{labels.contactDescription.b4}</b>
                <a href="tel:1(450)-538-1838">{labels.contactDescription.p4}</a>
              </p>
              <p>
                <b>{labels.contactDescription.b5}</b>
                <a
                  href="mailto:tentemechouietplus@gmail.com?Subject=Tente Mechoui et plus"
                  target="_top"
                >
                  {labels.contactDescription.p5}
                </a>
              </p>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

WorkSection.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.object.isRequired
};
export default withStyles(workStyle)(WorkSection);
