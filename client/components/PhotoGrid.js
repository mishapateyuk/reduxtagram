import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo';

class PhotoGrid extends React.Component {
  render() {
    const p = this.props;
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => <Photo key={post.id} post={post} index={index} {...this.props}/>)}
      </div>
    );
  };
};

export default PhotoGrid;
