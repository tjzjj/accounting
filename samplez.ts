<template>
  <div class="user-transaction">
    <div class="div">
      <div class="group">
        <div class="overlap">
          <p class="text-wrapper">
            Registry of Appropriation and Commitment System (RACS)
          </p>
          <img
            class="tagum-city-seal"
            alt="Tagum city seal"
            :src="tagumCitySealDavaoDelNorte2"
          />
          <div class="icon-list">
            <div class="group-2">
              <img class="image" alt="Image" :src="image2" />
              <div class="reports">Libraries</div>
              <ChevronDown class="chevron-down" />
            </div>
            <div class="overlap-group">
              <img class="frame" alt="Frame" :src="frame" />
              <div class="nav-transac">
                <ChevronDown class="size-20" />
                <img class="rectangle" alt="Rectangle" :src="rectangle45" />
                <img class="img" alt="Frame" :src="image" />
                <div class="div-wrapper">
                  <div class="text-wrapper-2">Transaction</div>
                </div>
              </div>
              <div class="reports-2">Dashboard</div>
            </div>
            <div class="group-3">
              <img
                class="png-clipart-computer"
                alt="Png clipart computer"
                :src="pngClipartComputerIconsDesktopReportFormPaperCutMiscellaneousAngleThumbnailRemovebgPreview1"
              />
              <div class="text-wrapper-3">Reports</div>
            </div>
          </div>
        </div>
      </div>
      <div class="group-wrapper">
        <div class="group-4">
          <img class="image-2" alt="Image" :src="image3" />
          <ArrowDropDown class="arrow-drop-down" />
        </div>
      </div>
      <div class="group-5">
        <div class="group-6">
          <div class="group-7">
            <div class="text-wrapper-4">39,000,000,000.00</div>
            <div class="text-wrapper-5">Total Appropriation</div>
            <img class="frame-2" alt="Frame" :src="frame2" />
          </div>
          <div class="overlap-group-2">
            <div class="group-8">
              <div class="text-wrapper-6">Total Obligation</div>
              <div class="text-wrapper-7">29,000.00</div>
              <img class="assignment" alt="Assignment" :src="assignment" />
            </div>
            <div class="group-9">
              <div class="text-wrapper-8">Total Balance</div>
              <div class="text-wrapper-9">29,000,000.00</div>
              <img class="balance" alt="Balance" :src="balance" />
            </div>
          </div>
        </div>
      </div>
      <img class="image-3" alt="Image" :src="image1" />
      <img class="image-4" alt="Image" :src="image4" />
      <div class="group-10">
        <div class="overlap-wrapper">
          <div class="overlap-2">
            <div class="element">
              <div class="frame-3">
                <div class="text-wrapper-10">ID</div>
                <img class="vector" alt="Vector" :src="vector" />
              </div>
              <div class="frame-4">
                <div class="text-wrapper-11">Date</div>
                <BxsSortAlt class="icon-instance-node" color="#9E9E9E" />
              </div>
              <div class="frame-5">
                <div class="text-wrapper-11">Description</div>
                <BxsSortAlt class="icon-instance-node" color="#9E9E9E" />
              </div>
              <div class="frame-6">
                <div class="text-wrapper-11">Amount</div>
                <BxsSortAlt class="icon-instance-node" color="#9E9E9E" />
              </div>
              <div class="frame-7">
                <div class="text-wrapper-11">Unappropriated</div>
                <img class="vector" alt="Vector" :src="vector2" />
              </div>
              <div class="frame-7">
                <div class="text-wrapper-10">Action</div>
              </div>
            </div>
            <div class="overlap-group-wrapper">
              <div class="overlap-group-3">
                <div class="element-2">
                  <div class="frame-8">
                    <div class="frame-9">
                      <div class="text-wrapper-12">Show</div>
                      <div class="frame-10">
                        <div class="text-wrapper-13">10</div>
                        <BiCaretDownFill
                          class="bi-caret-down-fill"
                          color="#9E9E9E"
                        />
                      </div>
                      <div class="text-wrapper-12">entries</div>
                    </div>
                    <div class="frame-11">
                      <AkarIconsSearch class="icon-instance-node" />
                      <div class="text-wrapper-14">Search...</div>
                    </div>
                  </div>
                  <div class="frame-12">
                    <FluentAdd16Filled
                      class="icon-instance-node"
                      color="white"
                    />
                    <div class="text-wrapper-15">Add</div>
                  </div>
                </div>
                <div class="group-11">
                  <div class="frame-13">
                    <Calendar class="icon-instance-node" />
                    <div class="text-wrapper-16">25/11/2022</div>
                    <Clear class="icon-field-clear" />
                  </div>
                  <div class="frame-14">
                    <Calendar class="icon-instance-node" />
                    <div class="text-wrapper-16">25/11/2022</div>
                    <Clear class="icon-field-clear" />
                  </div>
                  <div class="text-wrapper-17">To</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group-12">
          <div class="text-wrapper-18">1</div>
          <div class="text-wrapper-19">1/22/25</div>
          <div class="text-wrapper-20">125,000,000.000</div>
          <div class="text-wrapper-21">0.00</div>
          <div class="text-wrapper-22">Budget for 2025</div>
          <div class="frame-wrapper">
            <div class="frame-15">
              <Edit1_2 class="icon-instance-node-2" color="#35AC53" />
              <Trash2_1 class="icon-instance-node-2" color="#A30D11" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from './ChevronDown';
import ArrowDropDown from './ArrowDropDown';
import BxsSortAlt from './BxsSortAlt';
import Calendar from './Calendar';
import Clear from './Clear';
import Edit1_2 from './Edit1_2';
import FluentAdd16Filled from './FluentAdd16Filled';
import Trash2_1 from './Trash2_1';
import AkarIconsSearch from './AkarIconsSearch';
import BiCaretDownFill from './BiCaretDownFill';
import vector from './vector.svg';
import vector2 from './vector-2.svg';
import frame from './frame.svg';
import frame2 from './frame-2.svg';
import rectangle45 from './rectangle-45.svg';
import image from './image.svg';
import image1 from './image.png';
import image2 from './image-2.png';
import image3 from './image-3.png';
import image4 from './image-4.png';
import assignment from './assignment.png';
import balance from './balance.png';
import pngClipartComputerIconsDesktopReportFormPaperCutMiscellaneousAngleThumbnailRemovebgPreview1 from './png-clipart-computer-icons-desktop-report-form-paper-cut-miscellaneous-angle-thumbnail-removebg-preview-1.png';
import tagumCitySealDavaoDelNorte2 from './tagum-city-seal-davao-del-norte-2.png';

export default {
  name: 'UserTransaction',
  components: {
    ChevronDown,
    ArrowDropDown,
    BxsSortAlt,
    Calendar,
    Clear,
    Edit1_2,
    FluentAdd16Filled,
    Trash2_1,
    AkarIconsSearch,
    BiCaretDownFill,
  },
  data() {
    return {
      tagumCitySealDavaoDelNorte2,
      vector,
      vector2,
      frame,
      frame2,
      rectangle45,
      image,
      image1,
      image2,
      image3,
      image4,
      assignment,
      balance,
      pngClipartComputerIconsDesktopReportFormPaperCutMiscellaneousAngleThumbnailRemovebgPreview1,
    };
  },
};
</script>

<style>
.user-transaction {
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.user-transaction .div {
  background-color: #f3f3f3;
  height: 1024px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.user-transaction .group {
  height: 1271px;
  left: -57px;
  position: absolute;
  top: -2px;
  width: 297px;
}

.user-transaction .overlap {
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgb(87.64, 177.65, 101.14) 100%
  );
  box-shadow: 0px 10px 60px #e1ecf880, 0px 4px 4px #00000040, 0px 4px 4px
    #00000040;
  height: 1271px;
  position: relative;
  width: 295px;
}

.user-transaction .text-wrapper {
  color: #000000;
  font-family: "Montserrat-SemiBoldItalic", Helvetica;
  font-size: 13px;
  font-style: italic;
  font-weight: 600;
  left: 83px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 106px;
  width: 188px;
}

.user-transaction .tagum-city-seal {
  height: 68px;
  left: 141px;
  object-fit: cover;
  position: absolute;
  top: 27px;
  width: 71px;
}

.user-transaction .icon-list {
  height: 455px;
  left: 83px;
  position: absolute;
  top: 169px;
}

.user-transaction .group-2 {
  height: 35px;
  left: 8px;
  position: absolute;
  top: 144px;
  width: 188px;
}

.user-transaction .image {
  height: 31px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 31px;
}

.user-transaction .reports {
  color: #9197b3;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 52px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 4px;
  transform: rotate(0.33deg);
  width: 86px;
}

.user-transaction .chevron-down {
  height: 21px !important;
  left: 166px !important;
  position: absolute !important;
  top: 4px !important;
  width: 20px !important;
}

.user-transaction .overlap-group {
  height: 95px;
  left: -26px;
  position: absolute;
  top: 37px;
  width: 238px;
}

.user-transaction .frame {
  height: 22px;
  left: 36px;
  position: absolute;
  top: 8px;
  width: 22px;
}

.user-transaction .nav-transac {
  height: 95px;
  left: 0;
  position: absolute;
  top: 0;
  width: 238px;
}

.user-transaction .size-20 {
  height: 21px !important;
  left: 200px !important;
  position: absolute !important;
  top: 62px !important;
  width: 20px !important;
}

.user-transaction .rectangle {
  height: 38px;
  left: 0;
  position: absolute;
  top: 0;
  width: 238px;
}

.user-transaction .img {
  height: 42px;
  left: 34px;
  position: absolute;
  top: 53px;
  width: 28px;
}

.user-transaction .div-wrapper {
  height: 32px;
  left: 86px;
  position: absolute;
  top: 61px;
  width: 89px;
}

.user-transaction .text-wrapper-2 {
  color: #9197b3;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 0;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 0;
  transform: rotate(0.35deg);
  width: 86px;
}

.user-transaction .reports-2 {
  color: #000000;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 86px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 9px;
  transform: rotate(0.33deg);
  width: 86px;
}

.user-transaction .group-3 {
  height: 33px;
  left: 5px;
  position: absolute;
  top: 191px;
  width: 144px;
}

.user-transaction .png-clipart-computer {
  height: 33px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 36px;
}

.user-transaction .text-wrapper-3 {
  color: #9197b3;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 55px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 2px;
  transform: rotate(0.33deg);
  width: 86px;
}

.user-transaction .group-wrapper {
  box-shadow: 0px 4px 4px #00000040;
  height: 35px;
  left: 1314px;
  position: absolute;
  top: 18px;
  width: 56px;
}

.user-transaction .group-4 {
  height: 35px;
  position: relative;
}

.user-transaction .image-2 {
  height: 35px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 35px;
}

.user-transaction .arrow-drop-down {
  height: 22px !important;
  left: 35px !important;
  position: absolute !important;
  top: 6px !important;
  width: 22px !important;
}

.user-transaction .group-5 {
  background-color: #ffffff;
  border-radius: 10px;
  height: 156px;
  left: 300px;
  position: absolute;
  top: 104px;
  width: 1031px;
}

.user-transaction .group-6 {
  height: 58px;
  left: 83px;
  position: relative;
  top: 52px;
  width: 931px;
}

.user-transaction .group-7 {
  height: 52px;
  left: 0;
  position: absolute;
  top: 0;
  width: 321px;
}

.user-transaction .text-wrapper-4 {
  color: #00000099;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 73px;
  letter-spacing: -0.24px;
  line-height: normal;
  position: absolute;
  top: 29px;
  white-space: nowrap;
  width: 244px;
}

.user-transaction .text-wrapper-5 {
  color: #00000099;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 73px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 3px;
  width: 180px;
}

.user-transaction .frame-2 {
  height: 52px;
  left: 0;
  position: absolute;
  top: 0;
  width: 56px;
}

.user-transaction .overlap-group-2 {
  height: 58px;
  left: 348px;
  position: absolute;
  top: 0;
  width: 587px;
}

.user-transaction .group-8 {
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 313px;
}

.user-transaction .text-wrapper-6 {
  color: #00000099;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 65px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 180px;
}

.user-transaction .text-wrapper-7 {
  color: #00000099;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 65px;
  letter-spacing: -0.24px;
  line-height: normal;
  position: absolute;
  top: 29px;
  white-space: nowrap;
  width: 244px;
}

.user-transaction .assignment {
  height: 48px;
  left: 0;
  position: absolute;
  top: 10px;
  width: 48px;
}

.user-transaction .group-9 {
  height: 56px;
  left: 285px;
  position: absolute;
  top: 0;
  width: 302px;
}

.user-transaction .text-wrapper-8 {
  color: #00000099;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 54px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 180px;
}

.user-transaction .text-wrapper-9 {
  color: #00000099;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 54px;
  letter-spacing: -0.24px;
  line-height: normal;
  position: absolute;
  top: 29px;
  white-space: nowrap;
  width: 244px;
}

.user-transaction .balance {
  height: 41px;
  left: 0;
  position: absolute;
  top: 15px;
  width: 41px;
}

.user-transaction .image-3 {
  height: 399px;
  left: 300px;
  object-fit: cover;
  position: absolute;
  top: 281px;
  width: 392px;
}

.user-transaction .image-4 {
  height: 399px;
  left: 712px;
  object-fit: cover;
  position: absolute;
  top: 281px;
  width: 619px;
}

.user-transaction .group-10 {
  height: 162px;
  left: 284px;
  position: absolute;
  top: 701px;
  width: 1064px;
}

.user-transaction .overlap-wrapper {
  height: 108px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1064px;
}

.user-transaction .overlap-2 {
  height: 108px;
  position: relative;
}

.user-transaction .element {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  gap: 16px;
  height: 45px;
  justify-content: center;
  left: 0;
  padding: 16px;
  position: absolute;
  top: 63px;
  width: 1064px;
}

.user-transaction .frame-3 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 4px;
  margin-bottom: -2.00px;
  margin-top: -2.00px;
  position: relative;
}

.user-transaction .text-wrapper-10 {
  color: #000000;
  flex: 1;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  text-align: center;
}

.user-transaction .vector {
  height: 12.66px;
  position: relative;
  width: 9.03px;
}

.user-transaction .frame-4 {
  align-items: center;
  display: flex;
  gap: 4px;
  margin-bottom: -2.00px;
  margin-top: -2.00px;
  position: relative;
  width: 134px;
}

.user-transaction .text-wrapper-11 {
  color: #000000;
  flex: 1;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
}

.user-transaction .icon-instance-node {
  height: 16px !important;
  position: relative !important;
  width: 16px !important;
}

.user-transaction .frame-5 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 8px;
  margin-bottom: -2.00px;
  margin-top: -2.00px;
  position: relative;
}

.user-transaction .frame-6 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 7px;
  margin-bottom: -2.00px;
  margin-top: -2.00px;
  position: relative;
}

.user-transaction .frame-7 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 8px;
  margin-bottom: -2.00px;
  margin-top: -2.00px;
  position: relative;
}

.user-transaction .overlap-group-wrapper {
  height: 64px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1064px;
}

.user-transaction .overlap-group-3 {
  height: 64px;
  position: relative;
}

.user-transaction .element-2 {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  gap: 553px;
  left: 0;
  padding: 16px;
  position: absolute;
  top: 0;
  width: 1064px;
}

.user-transaction .frame-8 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  position: relative;
  width: 413px;
}

.user-transaction .frame-9 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  justify-content: center;
  position: relative;
}

.user-transaction .text-wrapper-12 {
  color: #000000;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.user-transaction .frame-10 {
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 8px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  padding: 8px 9px;
  position: relative;
}

.user-transaction .text-wrapper-13 {
  color: #000000;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  width: fit-content;
}

.user-transaction .bi-caret-down-fill {
  height: 8px !important;
  position: relative !important;
  width: 8px !important;
}

.user-transaction .frame-11 {
  align-items: center;
  border: 1px solid;
  border-color: #9e9e9e;
  border-radius: 8px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 8px;
  padding: 8px 9px;
  position: relative;
}

.user-transaction .text-wrapper-14 {
  color: #9e9e9e;
  flex: 1;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.50px;
  position: relative;
}

.user-transaction .frame-12 {
  align-items: center;
  background-color: #35ab52;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-right: -8.00px;
  padding: 8px 12px;
  position: relative;
  width: 74px;
}

.user-transaction .text-wrapper-15 {
  color: #ffffff;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.50px;
  position: relative;
  width: fit-content;
}

.user-transaction .group-11 {
  height: 32px;
  left: 538px;
  position: absolute;
  top: 15px;
  width: 423px;
}

.user-transaction .frame-13 {
  align-items: center;
  border: 1px solid;
  border-color: #9e9e9e;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  height: 32px;
  left: 0;
  padding: 8px 9px;
  position: absolute;
  top: 0;
  width: 191px;
}

.user-transaction .text-wrapper-16 {
  color: #333333;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  width: 127px;
}

.user-transaction .icon-field-clear {
  height: 16px !important;
  margin-right: -2.28px !important;
  position: relative !important;
  width: 16px !important;
}

.user-transaction .frame-14 {
  align-items: center;
  border: 1px solid;
  border-color: #9e9e9e;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  height: 32px;
  left: 230px;
  padding: 8px 9px;
  position: absolute;
  top: 0;
  width: 191px;
}

.user-transaction .text-wrapper-17 {
  color: #000000;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  left: 203px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 9px;
  width: 15px;
}

.user-transaction .group-12 {
  height: 36px;
  left: 83px;
  position: absolute;
  top: 126px;
  width: 960px;
}

.user-transaction .text-wrapper-18 {
  color: #000000;
  font-family: "Montserrat-SemiBold", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 1px;
  width: 26px;
}

.user-transaction .text-wrapper-19 {
  color: #000000;
  font-family: "Montserrat-SemiBold", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 110px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 1px;
  width: 102px;
}

.user-transaction .text-wrapper-20 {
  color: #000000;
  font-family: "Montserrat-SemiBold", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 439px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 1px;
  width: 120px;
}

.user-transaction .text-wrapper-21 {
  color: #000000;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 628px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 120px;
}

.user-transaction .text-wrapper-22 {
  color: #000000;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 260px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 1px;
  width: 129px;
}

.user-transaction .frame-wrapper {
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
  left: 810px;
  position: absolute;
  top: 1px;
  width: 140px;
}

.user-transaction .frame-15 {
  align-items: center;
  display: flex;
  gap: 16px;
  position: relative;
  width: 64px;
}

.user-transaction .icon-instance-node-2 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}
</style>