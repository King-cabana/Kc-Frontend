import React,{useState, useRef, useEffect} from 'react'
import boy from '../../images/boy.png'
import { RiDashboardFill } from 'react-icons/ri'
import { IoCalendar } from 'react-icons/io5'
import { FaClipboardList } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiFillFileText } from 'react-icons/ai'
import {
  Body, SideBar, Menu, MenuButton, MenuLink,
  Main, ImgWrap, Img, Button, Form, InfoBox, FormSquare,
  Left, Right, Select, FormInput, FormSelect, EventTime,
  EventStart, EventEnd,EventHeader, RightInput, ButtonBox,
  TicketLink, ImageButton, TitleImage, EventDescription,
  DateTime, Bar, Timeline, Line, InnerLine, List, ListNo,
  TimelinePoint, Action, Steps, Choice, Area, City, Country,
  TimeZone, Address, DateHeader, Back, PreviousLink, ForwardLink,
  Forward
} from './EventCreationElement'
import background from '../../images/bg.png'

const EventCreation = () => {

  const [image, setImage] = useState();
  
	const [preview, setPreview] = useState();
	useEffect(() => {
		if (image) {
		  const reader = new FileReader();
		  reader.onloadend = () => {
			setPreview(reader.result );
		  };
		  reader.readAsDataURL(image);
		} else {
		  setPreview(null)
		}
	  }, [image]);
	
	// const reader = new FileReader();
	
	const fileInputRef = useRef();
    // return (
    //     <div>
    //      <EventHeader>
    //      <h1> Event details </h1> 
    //      <p>Say something unique about this event.</p>
    //      </EventHeader>

    //      <Form>
    //        <EventHeader>
    //             <label><strong>Event title</strong></label>
    //        </EventHeader>
    //         <FormInput type="textbox" placeholder="Your event title" name="event" />


    //         <EventHeader><label><strong>Event description</strong></label></EventHeader>
    //         {/*
    //         <FormInput type="text" placeholder="Your event description" name="event" />
    //         */}
    //         <EventDescription type="text" placeholder="Your event description" name="event" />


    return (
        <Body style={{ backgroundImage: `url(${background})` }}>
          <SideBar>
            <Menu>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <RiDashboardFill /> Dashboard
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <IoCalendar /> Event Creation
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <FaClipboardList /> Vendor Management
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <GiReceiveMoney /> Sponsorship
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <AiFillFileText /> Reports
            </MenuButton>
            </MenuLink>
            </Menu>
            <ImgWrap>
                <Img src={boy} alt='Boy'/>
            </ImgWrap>
        </SideBar>
         <Main>
         <EventHeader>
         <h2>Event details</h2>
         <Timeline>
         <Line>
              <InnerLine></InnerLine>
         </Line>
            <List>
                <ListNo>
                    <TimelinePoint>1</TimelinePoint>
                    <Steps>Basic Info</Steps>
                </ListNo>
                <ListNo>
                    <TimelinePoint>2</TimelinePoint>
                    <Steps>Ticket Management</Steps>
                </ListNo>
                <ListNo>
                    <TimelinePoint>3</TimelinePoint>
                    <Steps>Guest Management</Steps>
                </ListNo>
                <ListNo>
                    <TimelinePoint>4</TimelinePoint>
                    <Steps>Preview</Steps>
                </ListNo>
              </List>
         </Timeline>
         </EventHeader>
          <Form>
          <InfoBox>
          <EventHeader>
          <h2>Basic Information</h2>
          </EventHeader>
            <FormSquare>
            <Left>
            <FormInput type="text" placeholder="Event Name/Title" name="event" />
            <FormInput type="text" placeholder="Event Organizer" name="event" />
            <FormInput type="text" placeholder="Add Hashtags" name="event" />
            </Left>
            <Right>
            <FormSelect>
              <option>Theme/Description</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Hang out</option>
              <option>End of the party</option>
            </FormSelect>
            <RightInput type="text" placeholder="No. of attendees/guests" name="event" />
            <RightInput type="text" placeholder="Event Programme/Highlights" name="event" />
            </Right>
            </FormSquare>
          </InfoBox>

          <InfoBox>
          <EventHeader>
          <h2>Date</h2>
          </EventHeader>
          <FormSquare>
          <Left>
            <Select>
            <Choice to="/event-ticket">Single</Choice>
            <Choice to="/event-ticket">Recurring</Choice>
            </Select>
            <EventTime>
            <EventStart>
            <DateHeader><label>Start Date</label></DateHeader>
            <DateTime type="date" />
            <DateHeader><label>End Date</label></DateHeader>
            <DateTime type="date" />
            </EventStart>
            <EventEnd>
            <DateHeader><label>Start Time</label></DateHeader>
            <DateTime type="time" />
            <DateHeader><label>End Time</label></DateHeader>
            <DateTime type="time" />
            </EventEnd>
            </EventTime>
          </Left>
          <Right>
          <TimeZone name="timezone" id="timezone">
            <option>Time Zone</option>
            <option value="-12">(UTC-12:00) International Date Line West</option>
            <option value="-11">(UTC-11:00) Coordinated Universal Time-11</option>
            <option value="-10">(UTC-10:00) Hawaii</option>
            <option value="-9">(UTC-09:00) Alaska</option>
            <option value="-7">(UTC-08:00) Baja California</option>
            <option value="-7">(UTC-07:00) Pacific Time (US &amp; Canada)</option>
            <option value="-8">(UTC-08:00) Pacific Time (US &amp; Canada)</option>
            <option value="-7">(UTC-07:00) Arizona</option>
            <option value="-6">(UTC-07:00) Chihuahua, La Paz, Mazatlan</option>
            <option value="-6">(UTC-07:00) Mountain Time (US &amp; Canada)</option>
            <option value="-6">(UTC-06:00) Central America</option>
            <option value="-5">(UTC-06:00) Central Time (US &amp; Canada)</option>
            <option value="-5">(UTC-06:00) Guadalajara, Mexico City, Monterrey</option>
            <option value="-6">(UTC-06:00) Saskatchewan</option>
            <option value="-5">(UTC-05:00) Bogota, Lima, Quito</option>
            <option value="-4">(UTC-05:00) Eastern Time (US &amp; Canada)</option>
            <option value="-4">(UTC-05:00) Indiana (East)</option>
            <option value="-4.5">(UTC-04:30) Caracas</option>
            <option value="-4">(UTC-04:00) Asuncion</option>
            <option value="-3">(UTC-04:00) Atlantic Time (Canada)</option>
            <option value="-4">(UTC-04:00) Cuiaba</option>
            <option value="-4">(UTC-04:00) Georgetown, La Paz, Manaus, San Juan</option>
            <option value="-4">(UTC-04:00) Santiago</option>
            <option value="-2.5">(UTC-03:30) Newfoundland</option>
            <option value="-3">(UTC-03:00) Brasilia</option>
            <option value="-3">(UTC-03:00) Buenos Aires</option>
            <option value="-3">(UTC-03:00) Cayenne, Fortaleza</option>
            <option value="-3">(UTC-03:00) Greenland</option>
            <option value="-3">(UTC-03:00) Montevideo</option>
            <option value="-3">(UTC-03:00) Salvador</option>
            <option value="-2">(UTC-02:00) Coordinated Universal Time-02</option>
            <option value="-1">(UTC-02:00) Mid-Atlantic - Old</option>
            <option value="0">(UTC-01:00) Azores</option>
            <option value="-1">(UTC-01:00) Cape Verde Is.</option>
            <option value="1">(UTC) Casablanca</option>
            <option value="0">(UTC) Coordinated Universal Time</option>
            <option value="0">(UTC) Edinburgh, London</option>
            <option value="1">(UTC+01:00) Edinburgh, London</option>
            <option value="1">(UTC) Dublin, Lisbon</option>
            <option value="0">(UTC) Monrovia, Reykjavik</option>
            <option value="2">(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
            <option value="2">(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
            <option value="2">(UTC+01:00) Brussels, Copenhagen, Madrid, Paris</option>
            <option value="2">(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
            <option value="1">(UTC+01:00) West Central Africa</option>
            <option value="1">(UTC+01:00) Windhoek</option>
            <option value="3">(UTC+02:00) Athens, Bucharest</option>
            <option value="3">(UTC+02:00) Beirut</option>
            <option value="2">(UTC+02:00) Cairo</option>
            <option value="3">(UTC+02:00) Damascus</option>
            <option value="3">(UTC+02:00) E. Europe</option>
            <option value="2">(UTC+02:00) Harare, Pretoria</option>
            <option value="3">(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
            <option value="3">(UTC+03:00) Istanbul</option>
            <option value="3">(UTC+02:00) Jerusalem</option>
            <option value="2">(UTC+02:00) Tripoli</option>
            <option value="3">(UTC+03:00) Amman</option>
            <option value="3">(UTC+03:00) Baghdad</option>
            <option value="3">(UTC+02:00) Kaliningrad</option>
            <option value="3">(UTC+03:00) Kuwait, Riyadh</option>
            <option value="3">(UTC+03:00) Nairobi</option>
            <option value="3">(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk</option>
            <option value="4">(UTC+04:00) Samara, Ulyanovsk, Saratov</option>
            <option value="4.5">(UTC+03:30) Tehran</option>
            <option value="4">(UTC+04:00) Abu Dhabi, Muscat</option>
            <option value="5">(UTC+04:00) Baku</option>
            <option value="4">(UTC+04:00) Port Louis</option>
            <option value="4">(UTC+04:00) Tbilisi</option>
            <option value="4">(UTC+04:00) Yerevan</option>
            <option value="4.5">(UTC+04:30) Kabul</option>
            <option value="5">(UTC+05:00) Ashgabat, Tashkent</option>
            <option value="5">(UTC+05:00) Yekaterinburg</option>
            <option value="5">(UTC+05:00) Islamabad, Karachi</option>
            <option value="5.5">(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
            <option value="5.5">(UTC+05:30) Sri Jayawardenepura</option>
            <option value="5.75">(UTC+05:45) Kathmandu</option>
            <option value="6">(UTC+06:00) Nur-Sultan (Astana)</option>
            <option value="6">(UTC+06:00) Dhaka</option>
            <option value="6.5">(UTC+06:30) Yangon (Rangoon)</option>
            <option value="7">(UTC+07:00) Bangkok, Hanoi, Jakarta</option>
            <option value="7">(UTC+07:00) Novosibirsk</option>
            <option value="8">(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
            <option value="8">(UTC+08:00) Krasnoyarsk</option>
            <option value="8">(UTC+08:00) Kuala Lumpur, Singapore</option>
            <option value="8">(UTC+08:00) Perth</option>
            <option value="8">(UTC+08:00) Taipei</option>
            <option value="8">(UTC+08:00) Ulaanbaatar</option>
            <option value="8">(UTC+08:00) Irkutsk</option>
            <option value="9">(UTC+09:00) Osaka, Sapporo, Tokyo</option>
            <option value="9">(UTC+09:00) Seoul</option>
            <option value="9.5">(UTC+09:30) Adelaide</option>
            <option value="9.5">(UTC+09:30) Darwin</option>
            <option value="10">(UTC+10:00) Brisbane</option>
            <option value="10">(UTC+10:00) Canberra, Melbourne, Sydney</option>
            <option value="10">(UTC+10:00) Guam, Port Moresby</option>
            <option value="10">(UTC+10:00) Hobart</option>
            <option value="9">(UTC+09:00) Yakutsk</option>
            <option value="11">(UTC+11:00) Solomon Is., New Caledonia</option>
            <option value="11">(UTC+11:00) Vladivostok</option>
            <option value="12">(UTC+12:00) Auckland, Wellington</option>
            <option value="12">(UTC+12:00) Coordinated Universal Time+12</option>
            <option value="12">(UTC+12:00) Fiji</option>
            <option value="12">(UTC+12:00) Magadan</option>
            <option value="13">(UTC+12:00) Petropavlovsk-Kamchatsky - Old</option>
            <option value="13">(UTC+13:00) Nuku'alofa</option>
            <option value="13">(UTC+13:00) Samoa</option>
          </TimeZone>
          {/*asdf*/}
          {preview ? (
              
              <TitleImage src={preview} alt={"preview"} style={{ objectFit: "cover" }} />
              
              ) : (
              
              <ImageButton
                onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  Add event Image
              </ImageButton>
              )}

            <FormInput input type="file" style={{ display: "none" }}  ref={fileInputRef} 
            accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substr(0, 5) === "image") {
                      setImage(file);
                    } else {
                      setImage(null);
                    }
                  }} />
          </Right>  
          </FormSquare>  
          </InfoBox>

          <Form>
          <InfoBox>
          <EventHeader>
          <h2>Location</h2>
          </EventHeader>
          <FormSquare>
          <Left>
          <Select>
          <Choice to="/event-ticket">Physical</Choice>
          <Choice to="/event-ticket">Virtual</Choice>
          <Choice to="/event-ticket">Both</Choice>
          </Select>
            <FormInput type="link" placeholder="Online Link" name="organiser" />
            <Address type="text " placeholder="Physical Address" name="organiser" />
            <Area>
              <City type="text" placeholder="City/State" name="organiser" />
              <Country id="country" name="country">
                  <option>Country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">Congo, Democratic Republic of the Congo</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and Mcdonald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">Korea, Democratic People's Republic of</option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libyan Arab Jamahiriya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Netherlands Antilles</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory, Occupied</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthelemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="CS">Serbia and Montenegro</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">South Georgia and the South Sandwich Islands</option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">United States Minor Outlying Islands</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands, British</option>
                  <option value="VI">Virgin Islands, U.s.</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
              </Country>
            </Area>
            <ButtonBox>
            <TicketLink to="/event-ticket">
            <Button to="/event-ticket">
               <strong>Save Location</strong> 
            </Button>
            </TicketLink>
          </ButtonBox>
          </Left>
          </FormSquare>
          </InfoBox>
          </Form>
            

          

            <ButtonBox>
            <PreviousLink to="">
            <Back to="">
               <strong>Back/Prev</strong> 
            </Back>
            </PreviousLink>
            <ForwardLink to="/event-ticket">
            <Forward to="/event-ticket">
               <strong>Save/Next</strong> 
            </Forward>
            </ForwardLink>
            </ButtonBox>
          </Form>
         </Main>
        </Body>
        
    )
  }

export default EventCreation;