import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

import weddingTent from "assets/img/IMG_9308-min.jpg";
import mechoui from "assets/img/IMG_0952-min.jpg";
import tablesAndChairs from "assets/img/IMG_3807-min.jpg";
import portableToilet from "assets/img/IMG_9298-min.jpg";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}
class ProductSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tentModal: false,
      mechouiModal: false,
      tableModal: false,
      toiletModal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  render() {
    const { classes, labels } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid,
      classes.roundCorners
    );
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{labels.productTitle}</h2>
            <h5 className={classes.description}>{labels.productDescription}</h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img
                    src={weddingTent}
                    alt="Wedding reception decorations"
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>{labels.tents}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {labels.tentsDescription}
                  </p>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("tentModal")}
                  >
                    <LibraryBooks className={classes.icon} />
                    {labels.details}
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.tentModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("tentModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose("tentModal")}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>{labels.tents}</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        {labels.tentModal.p1}
                        <ul>
                          <li>{labels.tentModal.li1}</li>
                          <li>{labels.tentModal.li2}</li>
                          <li>{labels.tentModal.li3}</li>
                          <li>{labels.tentModal.li4}</li>
                          <li>{labels.tentModal.li5}</li>
                          <li>{labels.tentModal.li6}</li>
                          <li>{labels.tentModal.li7}</li>
                        </ul>
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("tentModal")}
                        color="danger"
                        simple
                      >
                        {labels.close}
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img
                    src={mechoui}
                    alt="Méchoui trailer"
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>{labels.mechouis}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {labels.mechouisDescription}
                  </p>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("mechouiModal")}
                  >
                    <LibraryBooks className={classes.icon} />
                    {labels.details}
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.mechouiModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("mechouiModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose("mechouiModal")}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>{labels.mechouis}</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        {labels.mechouiModal.p1}
                        <ul>
                          <li>{labels.mechouiModal.li1}</li>
                          <li>{labels.mechouiModal.li2}</li>
                          <li>{labels.mechouiModal.li3}</li>
                        </ul>
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("mechouiModal")}
                        color="danger"
                        simple
                      >
                        {labels.close}
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img
                    src={tablesAndChairs}
                    alt="Wedding decorations"
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>{labels.tables}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {labels.tablesDescription}
                  </p>
                </CardBody>

                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("tableModal")}
                  >
                    <LibraryBooks className={classes.icon} />
                    {labels.details}
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.tableModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("tableModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose("tableModal")}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>{labels.tables}</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>{labels.tableModal.p1}</p>
                      <ul>
                        <li>{labels.tableModal.li1}</li>
                        <li>{labels.tableModal.li2}</li>
                      </ul>
                      <p>{labels.tableModal.p2}</p>
                      <ul>
                        <li>{labels.tableModal.li3}</li>
                        <li>{labels.tableModal.li4}</li>
                      </ul>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("tableModal")}
                        color="danger"
                        simple
                      >
                        {labels.close}
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                  <img
                    src={portableToilet}
                    alt="Portable toilet"
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>{labels.toilets}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {labels.toiletsDescription}
                  </p>
                </CardBody>

                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("toiletModal")}
                  >
                    <LibraryBooks className={classes.icon} />
                    {labels.details}
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.toiletModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("toiletModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose("toiletModal")}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>{labels.toilets}</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>{labels.toiletModal.p1}</p>
                      <ul>
                        <li>{labels.toiletModal.li1}</li>
                        <li>{labels.toiletModal.li2}</li>
                        <li>{labels.toiletModal.li3}</li>
                      </ul>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("toiletModal")}
                        color="danger"
                        simple
                      >
                        {labels.close}
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.object.isRequired
};
export default withStyles(productStyle)(ProductSection);
