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
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              <p>
                It would be our pleasure to answer any of your questions and
                help you make a reservation to ensure your outdoor event goes
                exactly as planned.
              </p>
              <p>
                Please give us a call during our business hours or send us an
                email with your questions.
              </p>
              <p>
                <b>7 days a week:</b>
                9h00 to 21h00
              </p>
              <p>
                <b>Telephone :</b>
                <a href="tel:1(450)-538-1838">(450)-538-1838</a>
              </p>
              <p>
                <b>Email :</b>
                <a
                  href="mailto:tentemechouietplus@gmail.com?Subject=Tente Mechoui et plus"
                  target="_top"
                >
                  tentemechouietplus@gmail.com
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
  classes: PropTypes.object.isRequired
};
export default withStyles(workStyle)(WorkSection);
