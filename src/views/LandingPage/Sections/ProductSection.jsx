import React from "react";
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
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid,
      classes.roundCorners
    );
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Our Promise to you</h2>
            <h5 className={classes.description}>
              When you ask us to help you host your outdoor event, we dedicate
              ourselves to providing you with high quality clean white tents, a
              delicious méchoui, chairs and tables, portable toilets, and above
              all else, excellent customer service. If you are not satisfied,
              please let us know and we will do whatever we can to make things
              right!
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img src={weddingTent} alt="Wedding reception decorations" className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>Tents</h4>
                <CardBody>
                  <p className={classes.description}>
                    We take pride in our work, and it shows. Every time we
                    install we make sure that it is meticulously cleaned and
                    inspected ensuring it has no blemishes. We guarantee that it
                    will be an experience worth having.
                  </p>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("tentModal")}
                  >
                    <LibraryBooks className={classes.icon} />
                    Details
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
                      <h4 className={classes.modalTitle}>Tents</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        We offer tents in various sizes:
                        <ul>
                          <li>20 x20</li>
                          <li>20 x30</li>
                          <li>20 x40</li>
                          <li>30 x40</li>
                          <li>30 x60</li>
                          <li>30 x80</li>
                          <li>30 x100</li>
                        </ul>
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("tentModal")}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img src={mechoui} alt="Méchoui trailer" className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>Méchouis</h4>
                <CardBody>
                  <p className={classes.description}>
                    Our catering service includes full course meal customizable
                    to your choice. Ask us about our rental service of mechoui machines with computer automated cooking.
                  </p>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("mechouiModal")}
                  >
                    <LibraryBooks className={classes.icon} />Details
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
                      <h4 className={classes.modalTitle}>Méchoui</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>Catoring services: </p>
                      <ul>
                        <li>Plates are fully customizable</li>
                        <li>
                          Various types of meat can be cooked at the same time
                        </li>
                        <li>Vegetarian options can be available</li>
                      </ul>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("mechouiModal")}
                        color="danger"
                        simple
                      >
                        Close
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
                <h4 className={classes.cardTitle}>Tables and chairs</h4>
                <CardBody>
                  <p className={classes.description}>
                    We offer several models of tables and chairs to suit the decor style of your event.
                  </p>
                </CardBody>

                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("tableModal")}
                  >
                    <LibraryBooks className={classes.icon} />Details
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
                      <h4 className={classes.modalTitle}>Tables and chairs</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>Tables:</p>
                      <ul>
                        <li>Round</li>
                        <li>Rectangle</li>
                      </ul>
                      <p>Fanback folding chairs:</p>
                      <ul>
                        <li>Black</li>
                        <li>White</li>
                      </ul>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("tableModal")}
                        color="danger"
                        simple
                      >
                        Close
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
                <h4 className={classes.cardTitle}>Portable toilets</h4>
                <CardBody>
                  <p className={classes.description}>
                    A variety of models are available for you to chose from. We
                    pride ourselves on ensuring the toilets spotless on arrival.
                  </p>
                </CardBody>

                <CardFooter className={classes.cardFooter}>
                  <Button
                    color="success"
                    block
                    onClick={() => this.handleClickOpen("toiletModal")}
                  >
                    <LibraryBooks className={classes.icon} />
                    Details
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
                      <h4 className={classes.modalTitle}>Portable Toilets</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>Models available:</p>
                      <ul>
                        <li>
                          Standard model - Includes toilet paper. Sanitation
                          pumps available on rental.
                        </li>
                        <li>
                          Deluxe model - Includes hand soap, toilet paper, paper
                          towel, waste basket, lights.
                        </li>
                        <li>Handicap model - Includes toilet paper.</li>
                      </ul>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => this.handleClose("toiletModal")}
                        color="danger"
                        simple
                      >
                        Close
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

export default withStyles(productStyle)(ProductSection);
