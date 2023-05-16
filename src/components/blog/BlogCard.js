import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

function BlogCard() {
  return (
      <div className='blog-section'>
          <div className='myblogs-card-4 text-center'>
              <img class="image img-responsive" src="https://www.eginnovations.com/blog/wp-content/uploads/2021/09/Amazon-AWS-Cloud-Topimage-1.jpg" alt=''/>
                  <div class="blog-content">
                      <div class="myblogs-description">
                          <h4 class="text-center"><strong>Mastering the Art of Instance Management</strong></h4>
                          <p>Amazon Elastic Compute Cloud (EC2) is a cloud computing service that provides scalable computing capacity in the Amazon Web Services (AWS) cloud. It is designed to make web-scale cloud computing easier for developers.....</p>
                          <Link to='https://dev.to/b_mududa/mastering-the-art-of-instance-management-a-comprehensive-guide-to-creating-and-terminating-instances-like-a-pro-2kio'>Read More</Link>
                      </div>
                  </div>
          </div>
          <div className='myblogs-card-4 text-center'>
              <img class="image img-responsive" src="https://res.cloudinary.com/practicaldev/image/fetch/s--XcM8J4ah--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/48j0dslyxcl4sv3ifnxa.jpg" alt=''/>
                  <div class="blog-content">
                      <div class="myblogs-description">
                          <h4 class="text-center"><strong>Creating a Static Web App on Azure Using a Linux VM</strong></h4>
                          <p>Static web apps have grown in popularity for a wide range of applications, from basic marketing websites to large online applications.You can quickly deploy your React project as a static web app on Microsoft Azure .....</p>
                          <Link to='https://dev.to/b_mududa/creating-a-static-web-app-on-azure-using-a-linux-vm-deploy-your-react-app-with-create-static-web-app-m7l'>Read More</Link>
                      </div>
                  </div>
          </div>
          <div className='myblogs-card-4 text-center'>
              <img class="image img-responsive" src="https://res.cloudinary.com/practicaldev/image/fetch/s--LxH1yY2M--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3kewvdau9uz6j2bf02u9.jpg" alt=''/>
                  <div class="blog-content">
                      <div class="myblogs-description">
                          <h4 class="text-center"><strong>Guide to adding storage disks to Linux Virtual Machine on Azure.</strong></h4>
                          <p>Are you new to Linux virtual machines on Azure? Need more storage or flexibility? This step-by-step guide will show you how to create, connect, and format a data disk for your Linux VM in Azure......</p>
                          <Link to='https://dev.to/b_mududa/guide-to-adding-storage-disks-to-linux-virtual-machine-on-azure-225f'>Read More</Link>
                      </div>
                  </div>
          </div>
          <div className='myblogs-card-4 text-center'>
              <img class="image img-responsive" src="https://res.cloudinary.com/practicaldev/image/fetch/s--dac_exOW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2kq8apmj7a6sgzyxnjhr.jpg" alt=''/>
                  <div class="blog-content">
                      <div class="myblogs-description">
                          <h4 class="text-center"><strong>SQL Commands Guide(Cheat-sheet)</strong></h4>
                          <p>SQL, or Structured Query Language, is a programming language used to manage data stored in relational databases.SQL statements are used to manage and manipulate data in these tables.......</p>
                          <Link to='https://dev.to/b_mududa/sql-statements-guidecheat-sheet-4em4'>Read More</Link>
                      </div>
                  </div>
          </div>
        </div>
  )
}

export default BlogCard;