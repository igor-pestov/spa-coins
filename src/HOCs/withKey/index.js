import React, { Component, Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Header from '../../components/Header/header';
import { setApiKey } from '../../redux/apiKey/actions';
import { getApiKey } from '../../redux/apiKey/selectors';
import { getError } from '../../redux/error/selectors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(92, 102, 93);
`;

const ErrorMessage = styled.h3`
  color: red;
`;

export default function withKey(ComponentToProtect) {
  class Hoc extends Component {
    apiKey = createRef();

    handleSaveClick = () => {
      const { setApiKey } = this.props;
      setApiKey(this.apiKey.current.value.trim());
    };


    render() {
      const { apiKey, error } = this.props;

      if (!apiKey) {
        return (
          <Fragment>
            <Header title="Crypto charts"/>
            <Container>
              <h1>Please enter key:</h1>

              {
                !!error && <ErrorMessage>{error}</ErrorMessage>
              }
              <div>
                <input type="text" ref={this.apiKey}/>
                <button onClick={this.handleSaveClick}>save</button>
              </div>
            </Container>
          </Fragment>

        );
      }

      return (
        <Fragment>
          <ComponentToProtect {...this.props} />
        </Fragment>
      );
    }
  }

  const mapStateToProps = createStructuredSelector({
    apiKey: getApiKey,
    error: getError,
  });


  const mapDispatchToProps = {
    setApiKey,
  };


  return connect(mapStateToProps, mapDispatchToProps)(Hoc);
}
