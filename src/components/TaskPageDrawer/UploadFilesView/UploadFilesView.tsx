import React from 'react';
import { FileImageOutlined, DeleteOutlined, VideoCameraOutlined } from '@ant-design/icons';

const UploadFilesView: React.FC = ({ fileType }: any) => {
  return (
    <div className="upload-files-view-wrapper">
      <div className="upload-files-view-container">
        {fileType === 'video' && <VideoCameraOutlined style={{ width: 50 }} />}
        {fileType === 'photo' && <FileImageOutlined style={{ width: 50 }} />}
        <span className="upload-files-view-name">
          {fileType === 'video' && 'some_video.avi'}
          {fileType === 'photo' && 'some_image.jpg'}
        </span>
      </div>
      <div className="upload-files-view-container">
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default UploadFilesView;
