import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team from "assets/img/team-min.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes, labels } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>{labels.teamTitle}</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img src={team} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>{labels.team}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {labels.teamDescription}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.object.isRequired
};
export default withStyles(teamStyle)(TeamSection);
