import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Contact extends Component{
    render(){
        return(
			<div>
<section class="inner-page-banner" id="home">
</section>
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
		<Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Liên Hệ</li>
	</ol>
</div>
    <section class="content-info py-5">
        <div class="container py-md-5">
            <div class="text-center px-lg-5">
                <h3 class="heading text-center mb-3 mb-sm-5">Liên Hệ</h3>
                <div class="title-desc text-center px-lg-5">
                    <p class="px-lg-5 sub-wthree">Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Our Store hướng đến một cuộc sống năng động, tích cực hơn..</p>
                </div>
            </div>
            <div class="contact-w3pvt-form mt-5">
                <form action="#" class="w3layouts-contact-fm" method="post">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div class="form-group">
                                <label>Last Name</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="email" name="Email" placeholder="" required="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Write Message</label>
                                <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                            </div>
                        </div>
                        <div class="form-group mx-auto mt-3">
                            <button type="submit" class="btn submit">Xác Nhận</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>

    <div class="map-w3layouts">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.5781166098047!2d106.80748335276127!3d10.799343621465756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175274e4c4d4cc3%3A0xc924255670b03d8!2zU0hPUCBCw4FOIELDk05HIMSQw4hOIEQ2NQ!5e0!3m2!1svi!2s!4v1657521374772!5m2!1svi!2s" allowfullscreen=""></iframe>
    </div>
	</div>
        )
    }
}
export default Contact