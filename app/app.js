import React from 'react';
import ReactDOM from 'react-dom';

class Feed extends React.Component {
  render() {
    return (
      <div>
      <div class="fb-status-update-entry panel panel-default">
        <div class="panel-body">
          <ul class="nav nav-pills">
            <li role="presentation" class="active">
              <a href="#"><span class="glyphicon glyphicon-pencil"></span> <strong>Update Status</strong></a>
            </li>
            <li role="presentation">
              <a href="#"><span class="glyphicon glyphicon-picture"></span> <strong>Add Photos/Video</strong></a>
            </li>
            <li role="presentation">
              <a href="#"><span class="glyphicon glyphicon-th"></span> <strong>Create Photo Album</strong></a>
            </li>
          </ul>
          <div class="media">
            <div class="media-left media-top">
              PIC
            </div>
            <div class="media-body">
              <div class="form-group">
                <textarea class="form-control" rows="2" placeholder="What's on your mind?"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-camera"></span>
                </button>
                <button type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-user"></span>
                </button>
                <button type="button" class="btn btn-default">
                  ☺
                </button>
                <button type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-pushpin"></span>
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pull-right">
                <button type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-user"></span> Friends <span class="caret"></span>
                </button>
                <button type="button" class="btn btn-default">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fb-status-update panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-md-10">
              <div class="media">
                <div class="media-left media-top">
                  PIC
                </div>
                <div class="media-body">
                  <a href="#">Someone</a>
                  <br /> Yesterday at 3:48pm · Austin, TX · <span class="glyphicon glyphicon-user"></span>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <span class="caret pull-right"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              ugh.
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-12">
              <ul class="list-inline">
                <li>
                <a href="#"><span class="glyphicon glyphicon-thumbs-up"></span> Like</a>
                </li>
                <li>
                <a href="#"><span class="glyphicon glyphicon-comment"></span> Comment</a>
                </li>
                <li>
                <a href="#"><span class="glyphicon glyphicon-share-alt"></span> Share</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-footer">
          <div class="row">
            <div class="col-md-12">
              <a href="#">13 people</a> like this
            </div>
          </div>
          <hr />
          <ul class="media-list">
            <li class="media">
              <div class="media-left media-top">
                PIC
              </div>
              <div class="media-body">
                <a href="#">Someone Else</a> hope everything is ok!
                <br><a href="#">Like</a> · <a href="#">Reply</a> · 20 hrs
              </div>
            </li>
            <li class="media">
              <div class="media-left media-top">
                PIC
              </div>
              <div class="media-body">
                <a href="#">Another Person</a> sending hugs your way
                <br /><a href="#">Like</a> · <a href="#">Reply</a> · 20 hrs
              </div>
            </li>
            <li class="media">
              <div class="media-left media-top">
                PIC
              </div>
              <div class="media-body">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Write a comment..." />
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">
                      <span class="glyphicon glyphicon-camera"></span>
                    </button>
                    <button class="btn btn-default" type="button">
                      ☺
                    </button>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

ReactDOM.render(
  <Feed />,
  document.getElementById('fb-feed')
);
