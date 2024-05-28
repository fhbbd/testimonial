import { Watermark } from "antd";
const Testmonial = ({ stdName, stdGpa, stdFather, stdMother, stdExam, stdBirthDate }) => {
    return (
        <Watermark content={"FAZLUL HAQUE BIDHYA NIKETON"} rotate={-22} gap={[50, 50]} offset={[10, 10]} className="flex items-center justify-center">
            <div className="w-[1132px] h-[792px] bg-white m-auto">
                <div className="w-full h-full  bg-gradient-to-b from-blue-400 to-green-400 dark:to-gray-800 p-2">
                    <div className=" flex flex-col items-center justify-start bg-gradient-to-b from-blue-300 to-orange-100 border-2 border-white w-full h-full">
                        <div className="flex flex-col items-center justify-center mt-8">
                            <div>
                                <h1 className="text-6xl font-poppinsBold">FAZLUL HAQUE BIDYANIKETON</h1>
                            </div>
                            <span className="text-xl mt-2">205 Ashkona, Medical Road, Dokkhinkhan, Dhaka 1230</span>
                        </div>
                        <div>
                            <p className="text-4xl font-testmonialfont px-4 py-2 mt-8 bg-white rounded-2xl border-4 border-blue-900 border-double">TESTIMONIAL</p>
                        </div>
                        <div>
                            <p className="font-certificateThree font-bold p-8 text-justify text-3xl">This is to certify that <span className="font-certificateTwo">{stdName}</span>   son/daughter of <span className="font-certificateTwo">{stdFather}</span>  and <span className="font-certificateTwo">{stdMother}</span>  , Ashkona medical road .Dhaka  duly passed the Secondary School Certificate Examination-<span className="font-certificateTwo">{stdExam}</span> under the Board of Intermediate and Secondary Education, Dhaka, Bangladesh from this school and obtained G.P.A. 5.00 on a scale of {stdGpa}. His/Her date of birth as recorded in his/her registration card is <span className="font-certificateTwo">{stdBirthDate}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Watermark>
    );
}

export default Testmonial;

{/* <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">School Testimonial</h2>
            <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 text-lg italic">
                    "Completing my SSC at this esteemed school was an incredible experience. The dedication and support
                    of the teachers helped me achieve excellent results. The facilities and learning environment are
                    unparalleled. I highly recommend this school to anyone looking for a strong foundation for their future."
                </p>
                <p className="text-gray-900 font-semibold text-right mt-4">- John Doe</p>
                <p className="text-gray-600 text-right">Class of 2024</p>
            </div> */}