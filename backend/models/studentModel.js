const db = require('../config/db');

exports.findByStudentId = async (student_id) => {
  const [rows] = await db.query('SELECT * FROM students WHERE student_id = ?', [student_id]);
  return rows[0];
};

exports.create = async (name, course, year, section) => {
  try {
    const student_id = await this.getNextStudentId(course);
    const [result] = await db.query(
      'INSERT INTO students (student_id, name, course, year, section) VALUES (?, ?, ?, ?, ?)',
      [student_id, name, course, year, section]
    );
  return result.insertId;
  } catch (err) {
    console.error('Error creating student:', err);
    throw err;
  }
};

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM students');
  return rows;
};

exports.update = async (id, student_id, name, course, year, section) => {
  // Get the current student record
  const [currentStudent] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
  
  // If course has changed, generate new student ID
  let newStudentId = student_id;
  if (currentStudent[0].course !== course) {
    newStudentId = await this.getNextStudentId(course);
  }

  // First update the student record
  await db.query(
    'UPDATE students SET student_id = ?, name = ?, course = ?, year = ?, section = ? WHERE id = ?',
    [newStudentId, name, course, year, section, id]
  );

  // Then update the grades if the student ID changed
  if (currentStudent[0].student_id !== newStudentId) {
    await db.query(
      'UPDATE grades SET student_id = ? WHERE student_id = ?',
      [newStudentId, currentStudent[0].student_id]
    );
  }
};

exports.delete = async (id) => {
  await db.query('DELETE FROM students WHERE id = ?', [id]);
};

exports.getNextStudentId = async (course) => {
  try {
    const currentYear = new Date().getFullYear().toString().slice(-2); // Get last 2 digits of year
    const courseCode = course.toUpperCase();
    
    // Get the last used number for this year and course
    const [rows] = await db.query(
      `SELECT student_id FROM students 
       WHERE student_id LIKE ? 
       ORDER BY student_id DESC 
       LIMIT 1`,
      [`${currentYear}${courseCode}-%`]
    );

    let lastNumber = 0;
    if (rows.length > 0) {
  const lastId = rows[0].student_id;
      lastNumber = parseInt(lastId.split('-')[1]);
    }

    const newNumber = lastNumber + 1;
    return `${currentYear}${courseCode}-${String(newNumber).padStart(4, '0')}`;
  } catch (err) {
    console.error('Error generating student ID:', err);
    throw err;
  }
};
